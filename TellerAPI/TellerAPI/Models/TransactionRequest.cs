using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TellerAPI.Models
{
    public class TransactionRequest<T>
    {
        public T Body { get; set; }
        public string TranCode { get; set; }
    }
}