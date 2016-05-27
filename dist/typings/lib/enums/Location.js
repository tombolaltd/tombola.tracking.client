"use strict";
var Location;
(function (Location) {
    Location[Location["Registration"] = 0] = "Registration";
    Location[Location["Login"] = 1] = "Login";
    Location[Location["MyAccount"] = 2] = "MyAccount";
    Location[Location["Deposit"] = 3] = "Deposit";
    Location[Location["FirstDeposit"] = 4] = "FirstDeposit";
    Location[Location["SecondIdVerification"] = 5] = "SecondIdVerification";
    Location[Location["Withdrawal"] = 6] = "Withdrawal";
    Location[Location["PaymentDetails"] = 7] = "PaymentDetails";
    Location[Location["ChangePassword"] = 8] = "ChangePassword";
    Location[Location["ChangeUsername"] = 9] = "ChangeUsername";
    Location[Location["ChangeContactPrefs"] = 10] = "ChangeContactPrefs";
    Location[Location["ChangeContactDetails"] = 11] = "ChangeContactDetails";
    Location[Location["LockLimitPrefs"] = 12] = "LockLimitPrefs";
    Location[Location["TimekeeperPrefs"] = 13] = "TimekeeperPrefs";
    Location[Location["CoolOffPrefs"] = 14] = "CoolOffPrefs";
    Location[Location["SelfExclusionPrefs"] = 15] = "SelfExclusionPrefs";
})(Location || (Location = {}));
exports.Location = Location;
var Location;
(function (Location) {
    function getStringValue(location) {
        return Location[location];
    }
    Location.getStringValue = getStringValue;
})(Location || (Location = {}));
exports.Location = Location;
//# sourceMappingURL=Location.js.map