namespace WorkRepAPI.Models.StudentsDTOs
{
    public class StudentNotifierDto : IObserver
    {
        private readonly string _email;
        private readonly IEmailService _emailService;


        public StudentNotifierDto(string email, IEmailService emailService)
        {
            _email = email;
            _emailService = emailService;
        }

        public void Update(string message)
        {
            var emailRequest = new EmailRequest
            {
                To = _email,
                Subject = "Estado cambiado",
                Body = "El estado ha cambiado."
            };
            _emailService.SendEmailAsync(emailRequest);
        }
    }
}
