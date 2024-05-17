using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WorkRepAPI.Entities
{
    public partial class pps_databaseContext : DbContext
    {
        public pps_databaseContext()
        {
        }

        public pps_databaseContext(DbContextOptions<pps_databaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Company> Companies { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=localhost;port=3306;database=pps_database;user=root;password=Teki$1998;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>(entity =>
            {
                entity.HasKey(e => e.Cuit)
                    .HasName("PRIMARY");

                entity.ToTable("company");

                entity.Property(e => e.Cuit)
                    .HasMaxLength(11)
                    .HasColumnName("CUIT");

                entity.Property(e => e.Address).HasMaxLength(100);

                entity.Property(e => e.BusinessName).HasMaxLength(45);

                entity.Property(e => e.CompanyName).HasMaxLength(45);

                entity.Property(e => e.ContactEmail).HasMaxLength(45);

                entity.Property(e => e.ContactPhone).HasMaxLength(45);

                entity.Property(e => e.Password).HasMaxLength(45);

                entity.Property(e => e.Type).HasMaxLength(45);

                entity.Property(e => e.Website).HasMaxLength(100);
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.Legajo)
                    .HasName("PRIMARY");

                entity.ToTable("student");

                entity.Property(e => e.Address).HasMaxLength(45);

                entity.Property(e => e.Biography).HasMaxLength(300);

                entity.Property(e => e.Career).HasMaxLength(45);

                entity.Property(e => e.CellPhoneNumber).HasMaxLength(45);

                entity.Property(e => e.City).HasMaxLength(45);

                entity.Property(e => e.Country).HasMaxLength(45);

                entity.Property(e => e.Cuil)
                    .HasMaxLength(45)
                    .HasColumnName("CUIL");

                entity.Property(e => e.CurriculumPlan).HasMaxLength(45);

                entity.Property(e => e.DateOfBirth).HasColumnType("datetime");

                entity.Property(e => e.DocumentNumber).HasMaxLength(45);

                entity.Property(e => e.DocumentType).HasMaxLength(45);

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.Flat).HasMaxLength(45);

                entity.Property(e => e.Gender).HasMaxLength(45);

                entity.Property(e => e.GithubUrl).HasMaxLength(150);

                entity.Property(e => e.LastName).HasMaxLength(45);

                entity.Property(e => e.LinkedUrl).HasMaxLength(150);

                entity.Property(e => e.MaritalStatus).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);

                entity.Property(e => e.Password).HasMaxLength(45);

                entity.Property(e => e.PhoneNumber).HasMaxLength(45);

                entity.Property(e => e.Province).HasMaxLength(45);

                entity.Property(e => e.SecondaryTitle).HasMaxLength(45);

                entity.Property(e => e.Turn).HasMaxLength(45);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
