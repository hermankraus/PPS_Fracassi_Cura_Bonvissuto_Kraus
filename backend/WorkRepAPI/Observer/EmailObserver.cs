using WorkRepAPI;

    public class EmailObserver : IObserver
    {
        private readonly string _email;
        private readonly IEmailService _emailService;
        private readonly int _legajo;

        public EmailObserver(string email, IEmailService emailService, int legajo)
        {
            _email = email;
            _emailService = emailService;
            _legajo = legajo;
        }

        public int getLegajo()
        {
            return _legajo;
        }

        public void Update(string message)
        {
            var emailRequest = new EmailRequest
            {
                To = _email,
                Subject = "Estado cambiado",
                Body = $"<strong>{message}</strong>"
            };
            _emailService.SendEmailAsync(emailRequest);
        }
    }

