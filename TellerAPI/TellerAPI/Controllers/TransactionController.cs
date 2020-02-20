using System.Web.Http;
using TellerAPI.Models;

namespace TellerAPI.Controllers
{
    [RoutePrefix("Transactions")]
    public class TransactionController : ApiController
    {   
        [HttpPost]
        [Route("Deposit")]
        public IHttpActionResult Deposit(TransactionRequest<Deposit> deposit) 
        {
            if (deposit.Body.Account.StartsWith("01"))
            {
                return Ok(new TransactionResponse<GeneralResult>()
                {
                    Response = new GeneralResult()
                    {
                        Result = "Transaction Succeeded"
                    }
                });
            }
            else
            {
                return NotFound();
            }
        }
    }
}