using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TellerAPI.Models
{
    public enum TransactionStatus { Succeeded,Failed}

    public class TransactionResponse<T>
    {
        public string Error { get; set; }
        public TransactionStatus Status { get; set; }
        public T Response { get; set; }
    }
}