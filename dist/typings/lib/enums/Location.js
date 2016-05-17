var Location;
(function (Location) {
    Location[Location["Registration"] = 0] = "Registration";
    Location[Location["Login"] = 1] = "Login";
    Location[Location["MyAccount"] = 2] = "MyAccount";
    Location[Location["Deposit"] = 3] = "Deposit";
    Location[Location["Withdrawal"] = 4] = "Withdrawal";
    Location[Location["PaymentDetails"] = 5] = "PaymentDetails";
    Location[Location["ChangePassword"] = 6] = "ChangePassword";
    Location[Location["ChangeUsername"] = 7] = "ChangeUsername";
    Location[Location["ChangeContactPrefs"] = 8] = "ChangeContactPrefs";
    Location[Location["ChangeContactDetails"] = 9] = "ChangeContactDetails";
    Location[Location["LockLimitPrefs"] = 10] = "LockLimitPrefs";
    Location[Location["TimekeeperPrefs"] = 11] = "TimekeeperPrefs";
    Location[Location["CoolOffPrefs"] = 12] = "CoolOffPrefs";
    Location[Location["SelfExclusionPrefs"] = 13] = "SelfExclusionPrefs";
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