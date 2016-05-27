declare enum Location {
    Registration = 0,
    Login = 1,
    MyAccount = 2,
    Deposit = 3,
    FirstDeposit = 4,
    SecondIdVerification = 5,
    Withdrawal = 6,
    PaymentDetails = 7,
    ChangePassword = 8,
    ChangeUsername = 9,
    ChangeContactPrefs = 10,
    ChangeContactDetails = 11,
    LockLimitPrefs = 12,
    TimekeeperPrefs = 13,
    CoolOffPrefs = 14,
    SelfExclusionPrefs = 15,
}
declare namespace Location {
    function getStringValue(location: Location): string;
}
export { Location };
