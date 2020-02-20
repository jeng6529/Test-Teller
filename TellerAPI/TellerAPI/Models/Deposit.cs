using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TellerAPI.Models
{
    public class Deposit
    {
        public string Account { get; set; }
        public decimal Amount { get; set; }
    }
}