export const fixMapping = {
  //#region Logon 4.1
  98: "EncryptMethod",
  108: "HeartBtInt",
  141: "ResetSeqNumFlag",
  553: "Username",
  554: "Password",
  1137: "DefaultApplVerID",
  //#endregion

  //#region Reject
  45: "RefSeqNum",
  371: "RefTagID",
  372: "RefMsgType",
  373: "SessionRejectReason",
  //#endregion

  //#region Resend Request
  7: "BeginSeqNo",
  16: "EndSeqNo",
  //#endregion

  //#region Sequence Reset
  123: "GapFillFlag",
  36: "NewSeqNo",
  //#endregion

  //#region Test Request
  112: "TestReqID",
  //#endregion

  //#region Heartbeat
  112: "TestReqID",
  //#endregion

  //#region Infrastructure 4.2
  379: "BusinessRejectRefID",
  380: "BusinessRejectReason",

  //#region new order 4.3
  11: "ClOrdID",
  1: "Account",
  529: "OrderRestrictions",
  18: "ExecInst",
  38: "OrderQty",
  40: "OrdType",
  44: "Price",
  54: "Side",
  60: "TransactTime",
  110: "MinQty",
  236: "Yield",
  59: "TimeInForce",
  432: "ExpireDate",
  126: "ExpireTime",
  1138: "DisplayQty",
  58: "Text",
  453: "NoPartyIDs",
  448: "PartyID",
  447: "PartyIDSource",
  452: "PartyRole",
  762: "SecuritySubType",
  55: "Symbol",
  //#endregion

  //#region cancel order
  37: "OrderID",
  41: "OrigClOrdID",
  // #endregion

  //#region Execution report
  17: "ExecID",
  150: "ExecType",
  790: "OrdStatusReqID",
  6: "AvgPx",
  14: "CumQty",
  31: "LastPx",
  32: "LastQty",
  75: "TradeDate",
  64: "SettlDate",
  574: "MatchType",
  103: "OrdRejReason",
  151: "LeavesQty",
  381: "GrossTradeAmt",
  880: "TradeMatchID",
  1057: "AggressorIndicator",
  897: "CopyMsgIndicator",
  //#endregion

  //#region Order Cancel Reject
  39: "OrdStatus",
  102: "CxlRejReason",
  434: "CxlRejResponseTo",
  //#endregion

  //#region standard header
  8: "BeginString",
  9: "BodyLength",
  35: "MsgType",
  1128: "ApplVerID",
  49: "SenderCompID",
  56: "TargetCompID",
  115: "OnBehalfOfCompID",
  116: "OnBehalfOfSubID",
  144: "OnBehalfOfLocationID",
  128: "DeliverToCompID",
  34: "MsgSeqNum",
  50: "SenderSubID",
  142: "SenderLocationID",
  57: "TargetSubID",
  143: "TargetLocationID",
  129: "DeliverToSubID",
  145: "DeliverToLocationID",
  43: "PossDupFlag",
  97: "PossResend",
  52: "SendingTime",
  122: "OrigSendingTime",
  347: "MessageEncoding",
  369: "LastMsgSeqNumProcessed",
  //#endregion

  //#region standard trailer
  10: "CheckSum",
  //#endregion
};
