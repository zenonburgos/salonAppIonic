/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Salon Locks & Lashes This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account-info',
    loadChildren: () => import('./pages/account-info/account-info.module').then(m => m.AccountInfoPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./pages/bookings/bookings.module').then(m => m.BookingsPageModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./pages/bookmarks/bookmarks.module').then(m => m.BookmarksPageModule)
  },
  {
    path: 'cancel-booking',
    loadChildren: () => import('./pages/cancel-booking/cancel-booking.module').then(m => m.CancelBookingPageModule)
  },
  {
    path: 'cancel-modal',
    loadChildren: () => import('./pages/cancel-modal/cancel-modal.module').then(m => m.CancelModalPageModule)
  },
  {
    path: 'cancel-success-modal',
    loadChildren: () => import('./pages/cancel-success-modal/cancel-success-modal.module').then(m => m.CancelSuccessModalPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'confirm-payments',
    loadChildren: () => import('./pages/confirm-payments/confirm-payments.module').then(m => m.ConfirmPaymentsPageModule)
  },
  {
    path: 'e-receipt',
    loadChildren: () => import('./pages/e-receipt/e-receipt.module').then(m => m.EReceiptPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then(m => m.ExplorePageModule)
  },
  {
    path: 'gallery-list',
    loadChildren: () => import('./pages/gallery-list/gallery-list.module').then(m => m.GalleryListPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxPageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./pages/invite-friends/invite-friends.module').then(m => m.InviteFriendsPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then(m => m.LanguagesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'notification-settings',
    loadChildren: () => import('./pages/notification-settings/notification-settings.module').then(m => m.NotificationSettingsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'package-details',
    loadChildren: () => import('./pages/package-details/package-details.module').then(m => m.PackageDetailsPageModule)
  },
  {
    path: 'packages-list',
    loadChildren: () => import('./pages/packages-list/packages-list.module').then(m => m.PackagesListPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'remove-bookmark',
    loadChildren: () => import('./pages/remove-bookmark/remove-bookmark.module').then(m => m.RemoveBookmarkPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'review-list',
    loadChildren: () => import('./pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
  },
  {
    path: 'salon-info',
    loadChildren: () => import('./pages/salon-info/salon-info.module').then(m => m.SalonInfoPageModule)
  },
  {
    path: 'salon-list',
    loadChildren: () => import('./pages/salon-list/salon-list.module').then(m => m.SalonListPageModule)
  },
  {
    path: 'security-settings',
    loadChildren: () => import('./pages/security-settings/security-settings.module').then(m => m.SecuritySettingsPageModule)
  },
  {
    path: 'select-slot',
    loadChildren: () => import('./pages/select-slot/select-slot.module').then(m => m.SelectSlotPageModule)
  },
  {
    path: 'service-details',
    loadChildren: () => import('./pages/service-details/service-details.module').then(m => m.ServiceDetailsPageModule)
  },
  {
    path: 'services-list',
    loadChildren: () => import('./pages/services-list/services-list.module').then(m => m.ServicesListPageModule)
  },
  {
    path: 'specialist',
    loadChildren: () => import('./pages/specialist/specialist.module').then(m => m.SpecialistPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then(m => m.SuccessPageModule)
  },
  {
    path: 'success-payment',
    loadChildren: () => import('./pages/success-payment/success-payment.module').then(m => m.SuccessPaymentPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
