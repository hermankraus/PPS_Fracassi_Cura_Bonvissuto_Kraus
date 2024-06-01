using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using WorkRepAPI.Entities;

namespace WorkRepAPI.Context
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

        public virtual DbSet<Administrator> Administrators { get; set; } = null!;
        public virtual DbSet<Career> Careers { get; set; } = null!;
        public virtual DbSet<Company> Companies { get; set; } = null!;
        public virtual DbSet<Skill> Skills { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;
        public virtual DbSet<Studentscareer> Studentscareers { get; set; } = null!;
        public virtual DbSet<Studentsexperience> Studentsexperiences { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=localhost;port=3306;database=pps_database;user=root;password=azul;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Administrator>(entity =>
            {
                entity.HasKey(e => e.Legajo)
                    .HasName("PRIMARY");

                entity.ToTable("administrators");

                entity.Property(e => e.Email)
                    .HasMaxLength(130)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(45)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Career>(entity =>
            {
                entity.HasKey(e => e.IdCareers)
                    .HasName("PRIMARY");

                entity.ToTable("careers");

                entity.HasIndex(e => new { e.NameCareers, e.InstitutionCareers }, "UNIQUE")
                    .IsUnique();

                entity.Property(e => e.IdCareers).HasColumnName("idCareers");

                entity.Property(e => e.InstitutionCareers).HasMaxLength(45);

                entity.Property(e => e.NameCareers)
                    .HasMaxLength(70)
                    .HasColumnName("nameCareers");

                entity.Property(e => e.Type).HasColumnType("enum('Grado','Tecnicatura')");
            });

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

                entity.Property(e => e.Password).HasMaxLength(256);

                entity.Property(e => e.State).HasColumnType("enum('Pending','Accepted','Rejected')");

                entity.Property(e => e.Type).HasMaxLength(45);

                entity.Property(e => e.Website).HasMaxLength(100);
            });

            modelBuilder.Entity<Skill>(entity =>
            {
                entity.HasKey(e => e.IdSkills)
                    .HasName("PRIMARY");

                entity.ToTable("skills");

                entity.HasIndex(e => e.DescriptionSkills, "descriptionSkills_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.IdSkills).HasColumnName("idSkills");

                entity.Property(e => e.DescriptionSkills)
                    .HasMaxLength(45)
                    .HasColumnName("descriptionSkills");
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

                entity.Property(e => e.DocumentType).HasColumnType("enum('DNI','LC','LE','PS')");

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.Flat).HasMaxLength(45);

                entity.Property(e => e.Gender).HasMaxLength(45);

                entity.Property(e => e.GithubUrl).HasMaxLength(150);

                entity.Property(e => e.LastName).HasMaxLength(45);

                entity.Property(e => e.LinkedUrl).HasMaxLength(150);

                entity.Property(e => e.MaritalStatus).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);

                entity.Property(e => e.Password).HasMaxLength(256);

                entity.Property(e => e.PhoneNumber).HasMaxLength(45);

                entity.Property(e => e.Province).HasMaxLength(45);

                entity.Property(e => e.SecondaryTitle).HasMaxLength(45);

                entity.Property(e => e.State).HasColumnType("enum('Pending','Accepted','Rejected')");

                entity.Property(e => e.Turn).HasMaxLength(45);

                entity.HasMany(d => d.IdSkills)
                    .WithMany(p => p.IdStudents)
                    .UsingEntity<Dictionary<string, object>>(
                        "Studentsskill",
                        l => l.HasOne<Skill>().WithMany().HasForeignKey("IdSkills").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("StudentsSkills_idSkills"),
                        r => r.HasOne<Student>().WithMany().HasForeignKey("IdStudents").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("StudentsSkills_idStudents"),
                        j =>
                        {
                            j.HasKey("IdStudents", "IdSkills").HasName("PRIMARY");

                            j.ToTable("studentsskills");

                            j.HasIndex(new[] { "IdSkills" }, "StudentsSkills_idSkills_idx");

                            j.IndexerProperty<int>("IdStudents").HasColumnName("idStudents");

                            j.IndexerProperty<int>("IdSkills").HasColumnName("idSkills");
                        });
            });

            modelBuilder.Entity<Studentscareer>(entity =>
            {
                entity.HasKey(e => new { e.IdStudents, e.IdCareers })
                    .HasName("PRIMARY");

                entity.ToTable("studentscareers");

                entity.HasIndex(e => e.IdCareers, "StudentsCareers_idCareers_idx");

                entity.Property(e => e.IdStudents).HasColumnName("idStudents");

                entity.Property(e => e.IdCareers).HasColumnName("idCareers");

                entity.Property(e => e.EnrollmentDate)
                    .HasColumnType("date")
                    .HasColumnName("enrollmentDate");

                entity.Property(e => e.GraduationDate)
                    .HasColumnType("date")
                    .HasColumnName("graduationDate");

                entity.Property(e => e.IsComplete)
                    .HasColumnType("enum('SI','NO')")
                    .HasColumnName("isComplete");

                entity.HasOne(d => d.IdCareersNavigation)
                    .WithMany(p => p.Studentscareers)
                    .HasForeignKey(d => d.IdCareers)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StudentsCareers_idCareers");

                entity.HasOne(d => d.IdStudentsNavigation)
                    .WithMany(p => p.Studentscareers)
                    .HasForeignKey(d => d.IdStudents)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StudentsCareers_idStudents");
            });

            modelBuilder.Entity<Studentsexperience>(entity =>
            {
                entity.HasKey(e => e.IdStudentsExperience)
                    .HasName("PRIMARY");

                entity.ToTable("studentsexperience");

                entity.HasIndex(e => e.IdSkills, "StudentsExperiencie_IdSkills_idx");

                entity.HasIndex(e => e.IdStudents, "StudentsExperiencie_IdStudents_idx");

                entity.Property(e => e.IdStudentsExperience).HasColumnName("idStudentsExperience");

                entity.Property(e => e.Company)
                    .HasMaxLength(45)
                    .HasColumnName("company");

                entity.Property(e => e.Description)
                    .HasMaxLength(150)
                    .HasColumnName("description");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("endDate");

                entity.Property(e => e.IdStudents).HasColumnName("idStudents");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("startDate");

                entity.HasOne(d => d.IdSkillsNavigation)
                    .WithMany(p => p.Studentsexperiences)
                    .HasForeignKey(d => d.IdSkills)
                    .HasConstraintName("StudentsExperiencie_IdSkills");

                entity.HasOne(d => d.IdStudentsNavigation)
                    .WithMany(p => p.Studentsexperiences)
                    .HasForeignKey(d => d.IdStudents)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StudentsExperiencie_IdStudents");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
