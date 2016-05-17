declare enum Location {
    Registration = 0,
    Login = 1,
    MyAccount = 2,
    Deposit = 3,
    Withdrawal = 4,
    PaymentDetails = 5,
    ChangePassword = 6,
    ChangeUsername = 7,
    ChangeContactPrefs = 8,
    ChangeContactDetails = 9,
    LockLimitPrefs = 10,
    TimekeeperPrefs = 11,
    CoolOffPrefs = 12,
    SelfExclusionPrefs = 13,
}
declare namespace Location {
    function getStringValue(location: Location): string;
}
export { Location };
