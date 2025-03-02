export const fixMapping = {

//#region new order
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

//#region replace order
11: "ClOrdID",
37: "OrderID",
41: "OrigClOrdID",
1: "Account",
529: "OrderRestrictions",
18: "ExecInst",
11: "ClOrdID",
37: "OrderID",
41: "OrigClOrdID",
1: "Account",
529: "OrderRestrictions",
18: "ExecInst",
38: "OrderQty",
40: "OrdType",
44: "Price",
54: "Side",
60: "TransactTime",
110: "MinQty",
59: "TimeInForce",
432: "ExpireDate",
126: "ExpireTime",
236: "Yield",
1138: "DisplayQty",
58: "Text",
//#endregion

//#region Execution report
11: "ClOrdID",
17: "ExecID",
18: "ExecInst",
37: "OrderID",
41: "OrigClOrdID",
150: "ExecType",
790: "OrdStatusReqID",
1: "Account",
529: "OrderRestrictions",
6: "AvgPx",
14: "CumQty",
31: "LastPx",
32: "LastQty",
38: "OrderQty",
110: "MinQty",
39: "OrdStatus",
40: "OrdType",
44: "Price",
54: "Side",
59: "TimeInForce",
60: "TransactTime",
75: "TradeDate",
432: "ExpireDate",
126: "ExpireTime",
64: "SettlDate",
574: "MatchType",
103:"OrdRejReason",
151: "LeavesQty",
236: "Yield",
381: "GrossTradeAmt",
880: "TradeMatchID",
1057: "AggressorIndicator",
1138: "DisplayQty",
58: "Text",
897: "CopyMsgIndicator",
//#endregion

//#region Order Cancel Reject
11: "ClOrdID",
37: "OrderID",
39: "OrdStatus",
41: "OrigClOrdID",
60: "TransactTime",
102: "CxlRejReason",
434: "CxlRejResponseTo",
58: "Text",
//#endregion

//#region Order Status Request
11: "ClOrdID",
37: "OrderID",
790: "OrdStatusReqID",
55: "Symbol",
54: "Side",
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


//#region Logon
98: "EncryptMethod",
108: "HeartBtInt",
141: "ResetSeqNumFlag",
553: "Username",
554: "Password",
1137: "DefaultApplVerID",
58: "Text",
//#endregion


};
