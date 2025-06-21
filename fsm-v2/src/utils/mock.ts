import type { Equation, Input, State } from "./interface";

const machineStates: State[] = [
    { id: "s1", name: "Home", pageUrl: "/home" },
    { id: "s2", name: "Login", pageUrl: "/login" },
    { id: "s3", name: "ForgotPassword", pageUrl: "/login" },
    { id: "s4", name: "ForgotPassword - Update", pageUrl: "/login" },
    { id: "s5", name: "Dashboard - Main", pageUrl: "/dashboard" },
    { id: "s6", name: "Dashboard - Profile", pageUrl: "/dashboard" },
    { id: "s7", name: "Dashboard - Profile Info", pageUrl: "/dashboard" },
    { id: "s8", name: "Dashboard - Analytics", pageUrl: "/dashboard" },
    { id: "s9", name: "Settings", pageUrl: "/settings" },
    { id: "s10", name: "Settings - Confirm", pageUrl: "/settings" },
    { id: "s11", name: "Settings - Date", pageUrl: "/settings" },
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
  
  const states = {
    Home: { id: "s1", name: "Home", pageUrl: "/home" },
    Login: { id: "s2", name: "Login", pageUrl: "/login" },
    ForgotPassword: { id: "s3", name: "ForgotPassword", pageUrl: "/login" },
    ForgotPasswordUpdate: { id: "s4", name: "ForgotPassword - Update", pageUrl: "/login" },
    DashboardMain: { id: "s5", name: "Dashboard - Main", pageUrl: "/dashboard" },
    DashboardProfile: { id: "s6", name: "Dashboard - Profile", pageUrl: "/dashboard" },
    DashboardProfileInfo: { id: "s7", name: "Dashboard - Profile Info", pageUrl: "/dashboard" },
    DashboardAnalytics: { id: "s8", name: "Dashboard - Analytics", pageUrl: "/dashboard" },
    Settings: { id: "s9", name: "Settings", pageUrl: "/settings" },
    SettingsConfirm: { id: "s10", name: "Settings - Confirm", pageUrl: "/settings" },
    SettingsDate: { id: "s11", name: "Settings - Date", pageUrl: "/settings" },
  };
  
  const inputs = {
    GoToLogin: { id: "i1", name: "GoToLogin" },                    // 0
    LoginSuccess: { id: "i2", name: "LoginSuccess" },                 // 1
    LoginForgotPassword: { id: "i3", name: "LoginForgotPassword" },          // 2
    LoginFailure: { id: "i4", name: "LoginFailure" },                 // 3
    ForgotPasswordSuccess: { id: "i5", name: "ForgotPasswordSuccess" },        // 4
    GoToDashboard: { id: "i6", name: "GoToDashboard" },                // 5
    GoToDashboardProfile: { id: "i7", name: "GoToDashboardProfile" },         // 6
    GoToDashboardProfileInfo: { id: "i8", name: "GoToDashboardProfileInfo" },   // 7
    GoToDashboardAnalytics: { id: "i9", name: "GoToDashboardAnalytics" },       // 8
    GoToSettings: { id: "i10", name: "GoToSettings" },                // 9
    GoToSettingsConfirm: { id: "i11", name: "GoToSettingsConfirm" },         //10
    GoToSettingsDate: { id: "i12", name: "GoToSettingsDate" },            //11
    Logout: { id: "i13", name: "Logout" },                      //12
    Back: { id: "i14", name: "Back" },                        //13
    Close: { id: "i15", name: "Close" },                       //14
  };
  
  const equations: Equation[] = [
    // Home → Login flow
    { startState: states.Home, input: inputs.GoToLogin, endState: states.Login },                    // Home → GoToLogin → Login
    { startState: states.Home, input: inputs.GoToDashboard, endState: states.DashboardMain },                    // Home → GoToLogin → Login
    { startState: states.Login, input: inputs.LoginForgotPassword, endState: states.ForgotPassword }, // Login → ForgotPassword
    { startState: states.ForgotPassword, input: inputs.ForgotPasswordSuccess, endState: states.ForgotPasswordUpdate }, // ForgotPassword → Update
    { startState: states.ForgotPasswordUpdate, input: inputs.Close, endState: states.Login },        // Update → Close → Login
  
    // Login → Dashboard
    { startState: states.Login, input: inputs.LoginSuccess, endState: states.DashboardMain },        // Login → Success → Dashboard Main
    { startState: states.Login, input: inputs.LoginFailure, endState: states.Login },                // Login → Failure → Retry Login
    { startState: states.Login, input: inputs.Back, endState: states.Home },                // Login → Failure → Retry Login
  
    // Dashboard internal transitions
    { startState: states.DashboardMain, input: inputs.GoToDashboardProfile, endState: states.DashboardProfile },       // Main → Profile
    { startState: states.DashboardProfile, input: inputs.GoToDashboardProfileInfo, endState: states.DashboardProfileInfo }, // Profile → Profile Info
    { startState: states.DashboardProfileInfo, input: inputs.Back, endState: states.DashboardProfile },  // Info → Back → Profile
    { startState: states.DashboardProfile, input: inputs.Back, endState: states.DashboardMain },          // Profile → Back → Main
    { startState: states.DashboardMain, input: inputs.GoToDashboardAnalytics, endState: states.DashboardAnalytics }, // Main → Analytics
    { startState: states.DashboardAnalytics, input: inputs.Back, endState: states.DashboardMain },        // Analytics → Back → Main
    { startState: states.DashboardMain, input: inputs.Close, endState: states.Home },       // Main → Close → Home
    { startState: states.DashboardProfile, input: inputs.Close, endState: states.Home }, // Profile → Close → Home
    { startState: states.DashboardProfileInfo, input: inputs.Close, endState: states.Home },  // Info → Close → Home
    { startState: states.DashboardAnalytics, input: inputs.Close, endState: states.Home },        // Analytics → Back → Main
  
    // Dashboard → Settings
    { startState: states.DashboardMain, input: inputs.GoToSettings, endState: states.Settings },          // Main → Settings
    { startState: states.Settings, input: inputs.GoToSettingsConfirm, endState: states.SettingsConfirm }, // Settings → Confirm
    { startState: states.Settings, input: inputs.GoToSettingsDate, endState: states.SettingsDate },       // Settings → Date
    { startState: states.SettingsConfirm, input: inputs.Back, endState: states.Settings },                // Confirm → Back → Settings
    { startState: states.SettingsDate, input: inputs.Back, endState: states.Settings },                   // Date → Back → Settings
    { startState: states.Settings, input: inputs.Close, endState: states.DashboardMain },       // Settings → Close → DashboardMain
    { startState: states.SettingsConfirm, input: inputs.Close, endState: states.DashboardMain },                // Confirm Close → DashboardMain
    { startState: states.SettingsDate, input: inputs.Close, endState: states.DashboardMain },                   // Date → Close → DashboardMain
  
    // Global logout
    { startState: states.DashboardMain, input: inputs.Logout, endState: states.Home },       // Main → Logout → Home
    { startState: states.DashboardProfile, input: inputs.Logout, endState: states.Home },    // Profile → Logout → Home
    { startState: states.DashboardAnalytics, input: inputs.Logout, endState: states.Home },  // Analytics → Logout → Home
    { startState: states.Settings, input: inputs.Logout, endState: states.Home },            // Settings → Logout → Home
  ];

  export  {equations, machineStates as states, machineInputs as inputs}