export const valueDescMapping = {

//#region message type 35
35:{
    0: "Heartbeat",
    A: "Logon",
    1: "Test Request",
    2: "Resend Request",
    3: "Reject",
    4: "Sequence Reset",
    5: "Logout",
    D: "New Order",
    F: "Order Cancel Request",
    G: "Order Cancel / Replace Request",
    H: "Order Status Request",
    AE:"Trade Capture Report",
    8:"Execution Report",
    9:"Order Cancel Reject",
    AR:"Trade Capture Report Ack",
},
//#endregion

  59: {
    0: "Day",
    1: "Good till cancelled",
    2: "At the Opening",
    3: "Immediate or Cancel (IOC)",
    4: "Fill or Kill (FoK)",
    6: "Good till date (GTD)",
  },
  54: {
    1: "Buy",
    2: "Sell",
    3: "Short sell"
  },
  40: {
    1: "Market",
    2: "Limit",
  }
  // ...add more mappings as needed...
};
