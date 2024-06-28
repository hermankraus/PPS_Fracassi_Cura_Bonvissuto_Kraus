namespace WorkRepAPI.Entities
{
    public partial class Administrator
    {
        public int Legajo { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
