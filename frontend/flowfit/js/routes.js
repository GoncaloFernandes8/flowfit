export const routes = {
    home: {
        path: '/',
        controller: 'homeController'
    },
    login: {
        path: '/login',
        controller: 'loginController'
    },
    register: {
        path: '/register',
        controller: 'registerController'
    },
    mypage: {
        path: '/mypage',
        controller: 'mypageController'
    },
    qrcode: {
        path: '/qrcode',
        controller: 'qrcodeController'
    },
    mytraining: {
        path: '/mytraining',
        controller: 'mytrainingController'
    },
    mytalk: {
        path: '/mytalk',
        controller: 'mytalkController'
    },
    currentPath: {
        path: '',
        controller: ''
    }
};
