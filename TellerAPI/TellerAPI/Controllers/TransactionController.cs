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
            Result = "Deposit Succeeded"
          }
        });
      }
      else
      {
        return NotFound();
      }
    }

    [HttpPost]
    [Route("Withdrawal")]
    public IHttpActionResult Withdrawal(TransactionRequest<Withdrawal> withdrawal)
    {
      if (withdrawal.Body.Account.StartsWith("01"))
      {
        return Ok(new TransactionResponse<GeneralResult>()
        {
          Response = new GeneralResult()
          {
            Result = "Withdrawal Succeeded"
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
