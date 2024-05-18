using WorkRepAPI.Context;
using WorkRepAPI.Controllers;
using WorkRepAPI.Data.Implementations;
using WorkRepAPI.Data.Interfaces;
using WorkRepAPI.Services.Implementations;
using WorkRepAPI.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Conexion 
var provider = builder.Services.BuildServiceProvider();
var config = provider.GetService<IConfiguration>();

builder.Services.AddCors(options =>
{
    var frontendURL = config.GetValue<string>("frontend_url");

    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
});


builder.Services.AddSingleton<pps_databaseContext>();

builder.Services.AddSingleton<IRegisterService, RegisterService>();
builder.Services.AddSingleton<IRegisterRepository, RegisterRepository>();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();
