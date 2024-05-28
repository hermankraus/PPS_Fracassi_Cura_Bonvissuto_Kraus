﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WorkRepAPI.Services.Interfaces;
using WorkRepAPI.Entities;
using WorkRepAPI.Models;
using WorkRepAPI.Models.LoginDTO;

namespace WorkRepAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAuthService _authenticationService;

        public AuthController(IConfiguration configuration, IAuthService authenticationService)
        {
            _configuration = configuration;
            _authenticationService = authenticationService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDTO loginDto)
        {
            if (loginDto == null || string.IsNullOrEmpty(loginDto.Legajo) || string.IsNullOrEmpty(loginDto.Password))
            {
                return BadRequest("Invalid credentials.");
            }

            var user = _authenticationService.Authenticate(loginDto.Legajo, loginDto.Password);
            if (user == null)
            {
                return Unauthorized("Invalid credentials.");
            }

            
            var token = GenerateJwtToken(user);


            return Ok(new { 
                Token = token, 
                Role = user.GetType().Name,
                State = user is Student student ? student.State.ToString() : null
            });
        }

        private string GenerateJwtToken(object user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Authentication:SecretForKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>();
            if (user is Student student)
            {
                claims.Add(new Claim("legajo", student.Legajo.ToString()));
                claims.Add(new Claim(ClaimTypes.Role, "Student"));
                claims.Add(new Claim("State", student.State.ToString()));
            }
            else if (user is Company company)
            {
                claims.Add(new Claim("email", company.ContactEmail));
                claims.Add(new Claim(ClaimTypes.Role, "Company"));
            }
            else if (user is Administrator admin)
            {
                
                claims.Add(new Claim("legajo", admin.Legajo.ToString()));
                claims.Add(new Claim(ClaimTypes.Role, "Admin"));

            }

            var token = new JwtSecurityToken(
              issuer: _configuration["Authentication:Issuer"],
              audience: _configuration["Authentication:Audience"],
              claims: claims,
              expires: DateTime.Now.AddHours(1),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }

    public class LoginModel
    {
        public string Identifier { get; set; }
        public string Password { get; set; }
    }
}