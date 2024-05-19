﻿using System;
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class TeaSet
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImagePath { get; set; }

    }
}
