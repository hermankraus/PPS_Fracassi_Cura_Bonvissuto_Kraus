using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Moq;
using WorkRepAPI.Controllers;
using WorkRepAPI.Enums;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepTests
{
    public class CompanyControllerTests
    {
        private readonly Mock<ICompanyService> _mockCompanyService;
        private readonly Mock<IMapper> _mockMapper;
        private readonly CompanyController _controller;

        public CompanyControllerTests()
        {
            _mockCompanyService = new Mock<ICompanyService>();
            _mockMapper = new Mock<IMapper>();
            _controller = new CompanyController(_mockCompanyService.Object, _mockMapper.Object);
        }

        [Fact]
        public void GetCompanies_ShouldReturnOkWithCompanies()
        {
            // Arrange
            var expectedCompanies = new List<ReadAllCompaniesDTO>
            {
                new ReadAllCompaniesDTO { Cuit = "12345678", CompanyName = "Company A", BusinessName = "Business A", ContactEmail = "contact@a.com", State = State.Accepted },
                new ReadAllCompaniesDTO { Cuit = "87654321", CompanyName = "Company B", BusinessName = "Business B", ContactEmail = "contact@b.com", State = State.Accepted }
            };

            _mockCompanyService.Setup(s => s.GetAllCompanies()).Returns(expectedCompanies);

            // Act
            var result = _controller.GetCompanies();

            // Assert
            var okResult = Assert.IsType<ActionResult<ICollection<ReadAllCompaniesDTO>>>(result);
            var objectResult = Assert.IsType<OkObjectResult>(okResult.Result);

            Assert.Equal(200, objectResult.StatusCode);
            
        }

        [Fact]
        public void GetCompanies_ShouldReturnBadRequestOnException()
        {
            // Arrange
            _mockCompanyService.Setup(s => s.GetAllCompanies()).Throws(new Exception("Simulated exception"));

            // Act
            var result = _controller.GetCompanies();

            // Assert
            var badRequestResult = Assert.IsType<BadRequestObjectResult>(result.Result);
            Assert.Equal(400, badRequestResult.StatusCode);
            Assert.Equal("Simulated exception", badRequestResult.Value);
        }
    }
}
