import type { Input, State } from "./interface";

const machineStates: State[] = [
    { id: "s1", name: "Home", pageUrl: "/home" },
    { id: "s2", name: "Login", pageUrl: "/login" },
    { id: "s5", name: "Business List", pageUrl: "/:zip/:category" },
    { id: "s6", name: "Booking Select Time Slot", pageUrl: "/:zip/:category/booking" },
    { id: "s6", name: "Contact Form", pageUrl: "/:zip/:category/booking" },
    { id: "s6", name: "Confirm Booking", pageUrl: "/:zip/:category/booking" },
    { id: "s6", name: "Confirmation", pageUrl: "/:zip/:category/booking" },
    { id: "s6", name: "Edit Personal Info", pageUrl: "/booking/edit-personal" },
    { id: "s6", name: "Book Time Slot", pageUrl: "/:zip/:category/booking/reschedule" },
    { id: "s6", name: "Confirm Booking", pageUrl: "/:zip/:category/booking/reschedule" },
    { id: "s6", name: "Confirmation Page", pageUrl: "/:zip/:category/booking/reschedule" },
    { id: "s6", name: "Book Time Slot", pageUrl: "/:zip/:category/booking/cancel" },
    { id: "s6", name: "Cancel Question", pageUrl: "/:zip/:category/booking/cancel" },
    { id: "s6", name: "Confirmation Page", pageUrl: "/:zip/:category/booking/cancel" },
  ];
  
  const machineInputs: Input[] = [
    { id: "i1", name: "GoToLogin" },                    // 0
    { id: "i2", name: "LoginSuccess" },                 // 1
    { id: "i3", name: "LoginForgotPassword" },          // 2
    { id: "i4", name: "LoginFailure" },                 // 3
    { id: "i5", name: "ForgotPasswordSuccess" },        // 4
    { id: "i6", name: "GoToDashboard" },                // 5
    { id: "i7", name: "GoToDashboardProfile" },         // 6
    { id: "i8", name: "GoToDashboardProfileInfo" },     // 7
    { id: "i9", name: "GoToDashboardAnalytics" },       // 8
    { id: "i10", name: "GoToSettings" },                // 9
    { id: "i11", name: "GoToSettingsConfirm" },         //10
    { id: "i12", name: "GoToSettingsDate" },            //11
    { id: "i13", name: "Logout" },                      //12
    { id: "i14", name: "Back" },                        //13
    { id: "i15", name: "Close" },                       //14
  ];