﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using WorkRepAPI.Enums;

namespace WorkRepAPI.Models.SkillDTOs
{
    public class SkillDTO
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdSkills { get; set; }
        [Required]
        public string DescriptionSkills { get; set; } = null!;
        [Required]

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public State State { get; set; }

    }
}
