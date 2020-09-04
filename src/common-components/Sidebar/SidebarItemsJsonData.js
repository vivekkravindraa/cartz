import account from '../../assets/images/user-component-assets/account/account.svg';
import changePassword from '../../assets/images/user-component-assets/changePassword/changePassword.svg';
import help from '../../assets/images/user-component-assets/help/help.svg';
import shoppingBag from '../../assets/images/user-component-assets/shoppingBag/shoppingBag.svg';
import userProfile from '../../assets/images/user-component-assets/userProfile/userProfile.svg';
import wallet from '../../assets/images/user-component-assets/wallet/wallet.svg';

export const sidebarItems = [
    {
        'content': 'Hi, Rahul Roy!',
        'imageSource': userProfile,
        'pathName': '/profile'
    },
    {
        'content': 'My Orders',
        'imageSource': shoppingBag,
        'pathName': '/my-orders'
    },
    {
        'content': 'Change Password',
        'imageSource': changePassword,
        'pathName': '/change-password'
    },
    {
        'content': 'Wallet',
        'imageSource': wallet,
        'pathName': '/wallet'
    },
    {
        'content': 'Address',
        'imageSource': account,
        'pathName': '/address'
    },
    {
        'content': 'Help',
        'imageSource': help,
        'pathName': '/help'
    }
];