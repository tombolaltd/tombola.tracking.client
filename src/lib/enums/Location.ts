enum Location {
    Registration,
    Login,
    MyAccount,
    Deposit,
    FirstDeposit,
    SecondIdVerification,
    Withdrawal,
    PaymentDetails,
    ChangePassword,
    ChangeUsername,
    ChangeContactPrefs,
    ChangeContactDetails,
    LockLimitPrefs,
    TimekeeperPrefs,
    CoolOffPrefs,
    SelfExclusionPrefs
}

namespace Location {
    export function getStringValue(location:Location):string {
        return Location[location];
    }
}

export {Location};
