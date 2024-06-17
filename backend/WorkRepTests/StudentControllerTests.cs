using Microsoft.AspNetCore.Mvc;
using Moq;
using WorkRepAPI.Controllers;
using WorkRepAPI.Enums;
using WorkRepAPI.Models.CompanyDTOs;
using WorkRepAPI.Services.Interfaces;

namespace WorkRepTests
{
    public class StudentControllerTests
    {
        private readonly Mock<IStudentService> _mockStudentService;
        private readonly StudentController _controller;

        public StudentControllerTests()
        {
            _mockStudentService = new Mock<IStudentService>();
            _controller = new StudentController(_mockStudentService.Object, null);
        }

        [Fact]
        public void GetStudentByLegajo_WithExistingStudent_ShouldReturnOk()
        {
            // Arrange
            int legajo = 123456; 
            var expectedStudent = new GetStudentsDTO { Legajo = legajo, Name = "John Doe", State = State.Accepted };

            _mockStudentService.Setup(s => s.GetStudentbyLegajo(legajo)).Returns(expectedStudent);

            // Act
            var result = _controller.GetStudentByLegajo(legajo) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);

            var studentDto = Assert.IsType<GetStudentsDTO>(result.Value);
            Assert.Equal(expectedStudent.Legajo, studentDto.Legajo);
            Assert.Equal(expectedStudent.Name, studentDto.Name);
            Assert.Equal(expectedStudent.State, studentDto.State);
        }

        [Fact]
        public void GetStudentByLegajo_WithNonExistingStudent_ShouldReturnBadRequest()
        {
            // Arrange
            int legajo = 999999; 

            _mockStudentService.Setup(s => s.GetStudentbyLegajo(legajo)).Returns((GetStudentsDTO)null);

            // Act
            var result = _controller.GetStudentByLegajo(legajo) as BadRequestObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(400, result.StatusCode);
            Assert.Equal("No existe el estudiante", result.Value);
        }
    }
}
