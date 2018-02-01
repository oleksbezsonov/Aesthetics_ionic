"use strict";
moment.locale("id"), angular.module("estetika", ["ionic", "ngCordova", "ngResource", "ionic-modal-select", "ngIOS9UIWebViewPatch", "jett.ionic.content.banner", "LocalStorageModule", "ion-gallery", "timer", "jett.ionic.filter.bar", "monospaced.elastic", "ionicLazyLoad"]).run(["$ionicPlatform", "$http", function(t, n) {
    t.ready(function() {
        window.cordova && window.cordova.plugins.Keyboard && (window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0), window.cordova.plugins.Keyboard.disableScroll(!0)), void 0 !== typeof analytics && analytics.startTrackerWithId("UA-66180555-2"), "iOS" === window.device.platform && (cordova.plugins.iosrtc.debug.enable("iosrtc*"), cordova.plugins.iosrtc.registerGlobals(), window.OT = cordova.require("cordova-plugin-opentokjs.OpenTokClient")), OT.setLogLevel(OT.DEBUG), cordova.plugins.backgroundMode.setDefaults({
            title: "Estetika dr. Affandi",
            text: "Beauty outside, happy inside",
            color: "257ad8"
        }), document.addEventListener("resume", function(t) {
            "iOS" !== device.platform && (cordova.plugins.backgroundMode.disable(), console.log("App Resumed"), console.log(t))
        }, !1), document.addEventListener("pause", function() {
            "iOS" !== device.platform && cordova.plugins.backgroundMode.enable()
        }, !1), cordova.plugins.backgroundMode.onactivate = function() {}, window.plugins.OneSignal.setLogLevel({
            logLevel: 4,
            visualLevel: 0
        });
        var t = function(t) {
            console.log("didReceiveRemoteNotificationCallBack: " + JSON.stringify(t))
        };
        window.plugins.OneSignal.init("dcc94b1e-b751-4190-a2e1-7fcb2a278ea5", {
            googleProjectNumber: "407774636246"
        }, t), window.plugins.OneSignal.enableNotificationsWhenActive(!0), window.plugins.OneSignal.enableInAppAlertNotification(!1)
    }), window.StatusBar && StatusBar.styleDefault()
}]).factory("$localstorage", ["$window", function(t) {
    return {
        set: function(n, e) {
            t.localStorage[n] = e
        },
        get: function(n, e) {
            return t.localStorage[n] || e
        },
        setObject: function(n, e) {
            t.localStorage[n] = JSON.stringify(e)
        },
        getObject: function(n) {
            return JSON.parse(t.localStorage[n] || "{}")
        }
    }
}]).config(["$httpProvider", "$stateProvider", "$urlRouterProvider", function(t, n, e) {
    n.state("app", {
        url: "/app",
        "abstract": !0,
        templateUrl: "templates/main.html",
        controller: "MainController"
    }).state("app.home", {
        url: "/home",
        cache: !0,
        views: {
            menuContent: {
                templateUrl: "templates/views/home.html",
                controller: "HomeController"
            }
        }
    }).state("app.promo", {
        url: "/promo",
        cache: !0,
        views: {
            menuContent: {
                templateUrl: "templates/views/promo.html",
                controller: "PromoController"
            }
        }
    }).state("app.settings", {
        url: "/settings",
        cache: !0,
        views: {
            menuContent: {
                templateUrl: "templates/views/settings.html",
                controller: "SettingsController"
            }
        }
    }).state("app.profile", {
        url: "/profile",
        views: {
            menuContent: {
                templateUrl: "templates/users/profile.html",
                controller: "ProfileController"
            }
        }
    }).state("app.product", {
        url: "/product",
        views: {
            menuContent: {
                templateUrl: "templates/products/index.html",
                controller: "ProductsController"
            }
        }
    }).state("app.product_detail", {
        url: "/product/detail/:product_id",
        views: {
            menuContent: {
                templateUrl: "templates/products/detail.html",
                controller: "ProductDetailController"
            }
        }
    }).state("app.product_shipping", {
        url: "/product/shipping/:total",
        views: {
            menuContent: {
                templateUrl: "templates/products/checkout/shipping.html",
                controller: "ShippingController"
            }
        }
    }).state("app.photo", {
        url: "/photo",
        views: {
            menuContent: {
                templateUrl: "templates/photos/index.html",
                controller: "consultation_index"
            }
        }
    }).state("app.photo_consultation_page_1", {
        url: "/photo/consultation/1",
        views: {
            menuContent: {
                templateUrl: "templates/photos/consultation_page1.html",
                controller: "consultation_page1"
            }
        }
    }).state("app.photo_consultation_page_2", {
        url: "/photo/consultation/2",
        views: {
            menuContent: {
                templateUrl: "templates/photos/consultation_page2.html",
                controller: "consultation_page2"
            }
        }
    }).state("app.photo_detail", {
        url: "/photo/detail/:id",
        views: {
            menuContent: {
                templateUrl: "templates/photos/detail.html",
                controller: "consultation_detail"
            }
        }
    }).state("app.video", {
        url: "/video",
        views: {
            menuContent: {
                templateUrl: "templates/videos/index.html",
                controller: "video_consultation_index"
            }
        }
    }).state("app.video_waiting", {
        url: "/video/waiting/:session_id",
        views: {
            menuContent: {
                templateUrl: "templates/videos/waiting.html",
                controller: "video_consultation_waiting"
            }
        }
    }).state("app.video_live", {
        url: "/video/live/:session_id",
        views: {
            menuContent: {
                templateUrl: "templates/videos/live.html",
                controller: "video_consultation_live"
            }
        }
    }).state("app.article", {
        url: "/article",
        views: {
            menuContent: {
                templateUrl: "templates/articles/index.html",
                controller: "ArticlesController"
            }
        }
    }).state("app.article_detail", {
        url: "/article/detail/:article_id/:article_date",
        views: {
            menuContent: {
                templateUrl: "templates/articles/detail.html",
                controller: "ArticleDetailController"
            }
        }
    }).state("app.service", {
        url: "/service",
        views: {
            menuContent: {
                templateUrl: "templates/services/index.html",
                controller: "ServiceController"
            }
        }
    }).state("app.serviceKulitDetail", {
        url: "/service/kulit/detail/:service_id",
        views: {
            menuContent: {
                templateUrl: "templates/services/kulit/detail.html",
                controller: "ServiceKulitController"
            }
        }
    }).state("app.serviceSpaDetail", {
        url: "/service/spa/detail/:service_id",
        views: {
            menuContent: {
                templateUrl: "templates/services/spa/detail.html",
                controller: "ServiceSpaController"
            }
        }
    }).state("app.branch", {
        url: "/branch",
        views: {
            menuContent: {
                templateUrl: "templates/branches/index.html",
                controller: "BranchController"
            }
        }
    }).state("app.branchDetail", {
        url: "/branch/detail/:branch_id",
        views: {
            menuContent: {
                templateUrl: "templates/branches/detail.html",
                controller: "BranchDetailController"
            }
        }
    }).state("app.about", {
        url: "/about",
        views: {
            menuContent: {
                templateUrl: "templates/about/index.html"
            }
        }
    }).state("app.orders", {
        url: "/orders",
        views: {
            menuContent: {
                templateUrl: "templates/orders/index.html",
                controller: "OrderIndexController"
            }
        }
    }).state("app.orders_detail", {
        url: "/orders/detail/:order_no",
        views: {
            menuContent: {
                templateUrl: "templates/orders/detail.html",
                controller: "OrderDetailController"
            }
        }
    }).state("app.orders_payment", {
        url: "/orders/detail/:token/payment",
        views: {
            menuContent: {
                templateUrl: "templates/orders/payment.html",
                controller: "OrderPaymentController"
            }
        }
    }).state("app.terms", {
        url: "/terms_and_conditions",
        views: {
            menuContent: {
                templateUrl: "templates/terms/index.html",
                controller: "TermsAndConditionsController"
            }
        }
    }).state("app.contact", {
        url: "/contact_us",
        views: {
            menuContent: {
                templateUrl: "templates/contact-us/index.html",
                controller: "ContactUsController"
            }
        }
    }), e.otherwise("/app/home")
}]), angular.module("estetika").constant("API_ENDPOINT", {
    host: "https://klinikestetika.com",
    port: 443,
    path: "/api/v1",
    needsAuth: !1
}), angular.module("estetika").controller("ServiceController", ["$ionicLoading", "$scope", "$http", "$stateParams", function(t, n, e, a) {
    n.totalNext = 10, n.totalNow = 0, n.kulits = [], n.spas = [], n.theEnd = !1, n.showLoading(), n.loadMore = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/services/groups/2/" + n.totalNow + "/10").then(function(t) {
            0 == t.data ? n.theEnd = !0 : (n.totalNow = n.totalNext, n.totalNext += 10, n.spas = n.spas.concat(t.data.map(function(t) {
                return t
            }))), n.$broadcast("scroll.infiniteScrollComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }, n.refreshSpas = function() {
        n.totalNow = 0, n.totalNext = 10, n.spas = [], n.theEnd = !1, n.loadMore(), n.$broadcast("scroll.refreshComplete")
    }, e.get("https://klinikestetika.com/api/v1/estetika/services/groups/1").then(function(e) {
        n.kulits = e.data.map(function(t) {
            return t
        }), t.hide()
    }, function(e) {
        t.hide(), n.showToast("Gagal melakukan penarikan data", "long", "bottom"), console.error("ERR", e)
    })
}]).controller("ServiceKulitController", ["$scope", "$http", "$stateParams", "$ionicSideMenuDelegate", "$ionicLoading", function(t, n, e, a, i) {
    t.$on("$ionicView.enter", function() {
        a.canDragContent(!1)
    }), t.$on("$ionicView.leave", function() {
        a.canDragContent(!0)
    }), t.data = "", t.content = "", t.showLoading(), n.get("https://klinikestetika.com/api/v1/estetika/services/" + e.service_id).then(function(n) {
        t.data = n.data, t.data.updated_at = moment(t.data.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY"), t.content = t.data.description.replace(/\/images/g, "http://klinikestetika.com/images"), i.hide()
    }, function(t) {
        console.error("ERR", t)
    })
}]).controller("ServiceSpaController", ["$scope", "$http", "$stateParams", "$ionicSideMenuDelegate", "$ionicLoading", function(t, n, e, a, i) {
    t.$on("$ionicView.enter", function() {
        a.canDragContent(!1)
    }), t.$on("$ionicView.leave", function() {
        a.canDragContent(!0)
    }), t.showLoading(), n.get("https://klinikestetika.com/api/v1/estetika/services/" + e.service_id).then(function(n) {
        t.data = n.data, t.data.updated_at = moment(t.data.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY"), t.content = n.data.content, i.hide()
    }, function(t) {
        console.error("ERR", t), i.hide()
    }), t.refreshDetailArticle = function() {
        n.get("https://klinikestetika.com/api/v1/estetika/services/" + e.service_id).then(function(n) {
            t.data = n.data, t.data.updated_at = moment(t.data.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY"), t.content = n.data.description, t.$broadcast("scroll.refreshComplete")
        }, function(t) {
            console.error("ERR", t), i.hide()
        })
    }
}]), angular.module("estetika").controller("GoBackController", ["$scope", "$ionicHistory", function(s, h) {
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
}]), angular.module("estetika").controller("ArticlesController", ["$scope", "$location", "$http", "$ionicLoading", function(t, n, e, a) {
    t.totalNext = 5, t.totalNow = 0, t.categories = [], t.category = 1, t.articles = [], t.theEnd = !1, e.get("https://klinikestetika.com/api/v1/estetika/post/category").then(function(n) {
        t.categories = n.data.map(function(t) {
            return t
        })
    }, function(n) {
        t.showToast("Gagal melakukan penarikan data", "long", "bottom"), console.error("ERR", n)
    }), t.loadMore = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/posts/category/" + t.category + "/" + t.totalNow + "/5").then(function(n) {
            0 == n.data ? (console.log(n.data), t.theEnd = !0) : (t.totalNow = t.totalNext, t.totalNext += 5, t.articles = t.articles.concat(n.data.map(function(t) {
                return t.updated_at = moment(t.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY"), t.isContainImage = t.image.indexOf("NULL") == -1, t
            }))), t.$broadcast("scroll.infiniteScrollComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.categoryChange = function(n) {
        t.category = n, t.totalNow = 0, t.totalNext = 5, t.articles = [], t.theEnd = !1, t.loadMore()
    }, t.refreshArticle = function() {
        t.totalNow = 0, t.totalNext = 5, t.articles = [], t.theEnd = !1, t.loadMore(), t.$broadcast("scroll.refreshComplete")
    }
}]).controller("ArticleDetailController", ["$ionicLoading", "$scope", "$http", "$stateParams", "$ionicSideMenuDelegate", "$sce", "$sanitize", "$cordovaInAppBrowser", "$location", "$ionicHistory", function(t, n, e, a, i, o, s, l, m, p) {
    n.$on("$ionicView.enter", function() {
        i.canDragContent(!1)
        if (m.path().split('/')[3] == 'detail') {n.detail_page = true;} else {n.detail_page = false;}
    }), n.$on("$ionicView.leave", function() {
        i.canDragContent(!0)
    }), n.showLoading(), n.date = a.article_date, e.get("https://klinikestetika.com/api/v1/estetika/post/" + a.article_id).then(function(e) {
        n.data = e.data, n.data.updated_at = moment(e.data.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY - HH:mm"), n.content = e.data.content, n.isContainImage = n.data.image.indexOf("NULL") == -1, t.hide()
    }, function(e) {
        n.showToast("Gagal melakukan penarikan data", "long", "bottom"), t.hide(), console.error("ERR", e)
    }), n.refreshDetailArticle = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/post/" + a.article_id).then(function(t) {
            console.log(t.data), n.data = t.data, n.content = t.data.content, n.$broadcast("scroll.refreshComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }, n.hrefToJS = function(t) {
        var n = /href="([\S]+)"/g,
            e = s(t).replace(n, "");
        return o.trustAsHtml(e)
    } 
}]), angular.module("estetika").controller("BranchController", ["$ionicLoading", "$scope", "$http", "$stateParams", function(t, n, e, a) {
    n.branches = [], n.showLoading(), e.get("https://klinikestetika.com/api/v1/estetika/branches").then(function(e) {
        n.branches = e.data.data.map(function(t) {
            return t.phone = t.phone.replace("-", ""), t
        }), t.hide()
    }, function(t) {
        n.showToast("Gagal melakukan penarikan data", "long", "bottom"), console.error("ERR", t)
    }), n.callNumber = function(t, n) {
        t.stopPropagation(), window.plugins.CallNumber.callNumber(function(t) {
            console.log(t)
        }, function(t) {
            console.log(t)
        }, n, !0)
    }
}]).controller("BranchDetailController", ["$ionicLoading", "$scope", "$http", "$stateParams", function(t, n, e, a) {
    n.showLoading(), n.branch = {}, n.branch_images = [], e.get("https://klinikestetika.com/api/v1/estetika/branches/" + a.branch_id).then(function(e) {
        n.branch = e.data.data, n.branch.phone = n.branch.phone.trim().replace("-", ""), n.branch_images = n.branch.branch_images.map(function(t) {
            return {
                src: "https://klinikestetika.com/" + t.link
            }
        }), console.log(n.branch), t.hide()
    }, function(t) {
        n.showToast("Gagal melakukan penarikan data", "long", "bottom"), console.error("ERR", t)
    }), n.showMaps = function(t) {
        var n = t.latitude,
            e = t.longitude,
            a = t.name,
            i = n + "," + e;
        if (ionic.Platform.isIOS()) window.open("maps://?q=" + i, "_system");
        else {
            var a = encodeURI(a);
            window.open("geo:0,0?q=" + i + "(" + a + ")", "_system")
        }
    }, n.callNumber = function(t) {
        window.plugins.CallNumber.callNumber(function(t) {
            console.log(t)
        }, function(t) {
            console.log(t)
        }, t, !0)
    }
}]), angular.module("estetika").controller("consultation_index", ["$http", "$scope", "$localstorage", "$ionicLoading", "$state", function(t, n, e, a, i) {
    n.consultations = [], n.showLoading(), t.get("https://klinikestetika.com/api/v1/estetika/consultations/" + e.get("mobile_session")).then(function(t) {
        angular.forEach(t.data, function(t, e) {
            n.consultations.push(t)
        }), n.consultations = n.consultations.sort(function(t, n) {
            var e = moment(t.updated_at, "YYYY-MM-DD HH:mm:ss").valueOf() < moment(n.updated_at, "YYYY-MM-DD HH:mm:ss").valueOf() ? 1 : -1;
            return e
        }).map(function(t) {
            return t.updated_at = t.updated_at ? moment(t.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY - HH:mm") : null, t.status = "photo" == t.type ? 1 == t.status ? "Tersedia" : 0 == t.status ? "Menunggu Resep" : "Ditolak" : t.status, t
        }), console.log(n.consultations), a.hide()
    }, function(t) {
        n.showToast("Maaf ada kesalahan pada saat mengambil data konsultasi Anda", "long", "bottom"), a.hide(), console.error("ERR", t)
    }), n.buyPrescription = function(a, i) {
        a.stopPropagation(), t.get("https://klinikestetika.com/api/v1/estetika/consultations/prescription/buy/" + e.get("mobile_session") + "/" + e.get("session") + "/" + i).then(function(t) {
            1 == t.data ? (n.showToast("Sukses Menambah Resep Ke Keranjang", "long", "bottom"), n.getAllCartItems()) : n.showToast("Resep Sudah Terbeli", "long", "bottom")
        }, function(t) {
            console.error("ERR", t)
        })
    }, n.openPhotoConsultationDetails = function(t) {
        i.go("app.photo_detail", {
            data: JSON.stringify(t)
        })
    }
}]).controller("consultation_page1", ["$ionicModal", "$scope", "$localstorage", "$ionicHistory", "$state", "Scopes", "$ionicLoading", "$ionicPopup", function(t, n, e, a, i, o, s, l) {
    n.closeConfirmation = function() {
        n.modal.hide()
    }, n.confirmation = function() {
        var t = "Apakah Anda yakin?";
        if (window.cordova) {
            var e = l.confirm({
                title: t
            });
            e.then(function(t) {
                console.log(t), t && n.CheckPilihan()
            })
        } else {
            var e = window.confirm(t);
            console.log(e), e && n.CheckPilihan()
        }
    }, n.checkChoice = function(t) {
        return "Ada" == t || "" == t
    }, n.checkValue = function(t) {
        console.log(t)
    }, n.resetConsultation = function() {
        n.consultation = {
            jenisKulit: "",
            jerawat: "Tidak Ada",
            flek: "Tidak Ada",
            riwayatPenyakit: "Tidak Ada",
            alergiObatOles: "Tidak Ada",
            alergiObatCair: "Tidak Ada"
        }
    }, n.consultation = {
        jenisKulit: "",
        jerawat: "Tidak Ada",
        flek: "Tidak Ada",
        riwayatPenyakit: "Tidak Ada",
        alergiObatOles: "Tidak Ada",
        alergiObatCair: "Tidak Ada"
    }, n.jenKel = e.get("gender"), n.jenisKulit = ["Normal", "Kering", "Berminyak", "Kombinasi"], n.jerawat = ["Ada", "Tidak Ada"], n.flek = ["Ada", "Tidak Ada"], n.riwayatPenyakit = ["Ada", "Tidak Ada"], n.alergiObatOles = ["Ada", "Tidak Ada"], n.alergiObatCair = ["Ada", "Tidak Ada"], n.khususWanita = ["Tidak Hamil", "Hamil", "Menstruasi Teratur", "Menstruasi Tidak Teratur"], n.CheckPilihan = function() {
        console.log(n.consultation), n.consultation.jenisKulit && n.consultation.jerawat && n.consultation.flek && n.consultation.riwayatPenyakit && ("Ada" != n.consultation.alergiObatOles || n.consultation.isiAlergiObatOles) && n.consultation.alergiObatOles && ("Ada" != n.consultation.alergiObatCair || n.consultation.isiAlergiObatCair) && n.consultation.alergiObatCair && (n.consultation.khususWanita || "P" != e.get("gender")) ? ("Tidak Ada" == n.consultation.alergiObatOles && (n.consultation.isiAlergiObatOles = ""), "Tidak Ada" == n.consultation.alergiObatCair && (n.consultation.isiAlergiObatCair = ""), "L" == e.get("gender") && (n.consultation.khususWanita = ""), o.store("consultation", n.consultation), n.resetConsultation(), i.go("app.photo_consultation_page_2")) : n.showToast("Lengkapi bagian yang belum diisi!", "long", "bottom")
    }
}]).controller("consultation_page2", ["$scope", "$localstorage", "Scopes", "$ionicHistory", "$state", "$http", "$ionicLoading", function(t, n, e, a, i, o, s) {
    t.consultation = e.get("consultation"), console.log(t.path), t.getConsultationPicture = function(n) {
        t.getPicture("consultationPicture" + n, "Upload Foto", !1, "none")
    }, t.finishConsultation = function() {
        s.show();
        for (var e = !0, l = 1; l < 4; l++) t["picture" + l] = document.getElementById("consultationPicture" + l), console.log(t["picture" + l].src), e = e && t["picture" + l].src.indexOf("images/user-default.png") == -1;
        t.picture4 = document.getElementById("consultationPicture4"), console.log(t.picture4), e ? o.post("https://klinikestetika.com/api/v1/estetika/consultation/submit", {
            image1: t.picture1.src,
            image2: t.picture2.src,
            image3: t.picture3.src,
            image4: t.picture4.src,
            jenisKulit: t.consultation.jenisKulit,
            jerawat: t.consultation.jerawat,
            flek: t.consultation.flek,
            riwayatPenyakit: t.consultation.riwayatPenyakit,
            alergiObatOles: t.consultation.alergiObatOles,
            isiAlergiObatOles: t.consultation.isiAlergiObatOles,
            alergiObatCair: t.consultation.alergiObatCair,
            isiAlergiObatCair: t.consultation.isiAlergiObatCair,
            khususWanita: t.consultation.khususWanita,
            keluhan: t.consultation.keluhan,
            mobile_session: n.get("mobile_session")
        }).then(function(n) {
            t.consultation = [], a.nextViewOptions({
                disableBack: !0
            }), a.clearCache().then(function() {
                1 == n.data ? (s.hide(), t.showToast("Konsultasi Berhasil Dikirim", "long", "bottom")) : (s.hide(), t.showToast("Konsultasi Gagal Untuk Dikirim", "long", "bottom")), i.go("app.photo")
            })
        }, function(t) {}) : (console.log("End of records is reached"), s.hide(), t.showToast("Foto tampak depan, kanan, dan kiri harus diisi", "long", "bottom"))
    }
}]).controller("consultation_detail", ["$scope", "$stateParams", "$http", "$ionicLoading", function(t, n, e, a) {
    t.photoDetails = null, t.getPhotoConsultationDetails = function(n) {
        t.showLoading(), e.get("https://klinikestetika.com/api/v1/estetika/photo-consultations/" + n + "?token=gkrWlsJAa9H6YoIDOKV4Cu13sYOqbEpW").then(function(n) {
            console.log(n), t.photoDetails = n.data.data.consultation, a.hide(), console.log(t.photoDetails)
        })["catch"](function(t) {
            a.hide(), console.log(t)
        })
    }, t.getPhotoConsultationDetails(n.id)
}]), angular.module("estetika").controller("ContactUsController", ["$scope", "$state", "$http", "$httpParamSerializer", "$ionicLoading", function(t, n, e, a, i) {
    t.contactUsData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }, t.submitMessage = function() {
        var o = !0,
            s = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //t.showLoading();
        for (var l in t.contactUsData)
            if (l) switch (l) {
                case "email":
                    o = o && s.test(t.contactUsData[l]);
                    break;
                case "message":
                    o = o && t.contactUsData[l].length >= 50;
                    break;
                default:
                    o = o && "" !== t.contactUsData[l]
            } else o = !1;
        o ? e.post("https://klinikestetika.com/api/v1/estetika/contact-us?token=gkrWlsJAa9H6YoIDOKV4Cu13sYOqbEpW", a(t.contactUsData)).then(function(e) {
            console.log(e), i.hide(), t.showToast("Pesan Anda telah dikirimkan. Terima kasih."), n.go("app.home")
        })["catch"](function(t) {
            console.log(t), i.hide()
        }) : t.showToast("Mohon masukkan data untuk semua kolom")
    }
}]), angular.module("estetika").controller("HomeController", ["$ionicLoading", "$scope", "$http", "$state", "$localstorage", "Scopes", "$ionicSlideBoxDelegate", "$ionicPopup", "$window", function(t, n, e, a, i, o, s, l, w, d) {
    n.banners = [], n.bannersLoaded = !1, n.additionalTextOnAndroid = ionic.Platform.isAndroid() ? "dan Live Video Consultation" : "", n.linkToArticle = function(t) {
        if (t.article_id) {
            var n = moment(t.created_at, "YYYY-MM-DD HH:mm:ss").format("DD MMMM YYYY");
            a.go("app.article_detail", {
                article_id: t.article_id,
                article_date: n
            })
        }
    }, n.checkSuccess = function() {
        var t = l.alert({
            title: "Sample",
            template: "Buka status pembayaran"
        });
        t.then(function(t) {
            window.open("https://klinikestetika.com/order/success/Owh38CV7h7b9UcGqWJk0eQ8xEACkGTtuqLyynuGEBSOw4vW1eg", "_blank")
        }, function(t) {
            console.log("The popup was not shown due to " + t)
        })
    }, e.get("https://klinikestetika.com/api/v1/estetika/banners").then(function(t) {
        n.banners = t.data.data.filter(function(t) {
            return 1 == t.is_active
        }).sort(function(t, n) {
            return t.order > n.order ? 1 : -1
        }), console.log("Banners", n.banners), n.bannersLoaded = !0, n.my_width = w.screen.width + 'px', s.update()
    }, function(t) {
        console.error("ERR", t)
    })
}]), angular.module("estetika").controller("MainController", ["$scope", "$ionicModal", "$location", "$timeout", "$http", "$localstorage", "$cordovaToast", "$cordovaCamera", "$ionicContentBanner", "$ionicHistory", "$cordovaProgress", "$state", "$ionicLoading", "$rootScope", "$cordovaNetwork", "$cordovaActionSheet", "$cordovaSpinnerDialog", "$cordovaInAppBrowser", "$ionicSideMenuDelegate", "$ionicPopup", "$ionicActionSheet", function(t, n, e, a, i, o, s, l, r, c, d, u, p, m, g, b, h, k, v, f, w) {
    Date.prototype.yyyymmdd = function() {
        var t = this.getFullYear().toString(),
            n = (this.getMonth() + 1).toString(),
            e = this.getDate().toString();
        return t + "-" + (n[1] ? n : "0" + n[0]) + "-" + (e[1] ? e : "0" + e[0])
    }, i.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", t.registerData = {}, t.loginData = {}, t.forgotPasswordData = {};
    var y = new Date;
    y.setFullYear(y.getUTCFullYear() - 1), t.maxDob = y.yyyymmdd(), t.loginData.email = "", t.loginData.password = "", t.cart_total = 0, t.shipping_price = 0, t.total_price = 0, t.cities = [], t.provinces = [], t.isCartEmpty = !0, t.global_menus = [{
        state: "app.home",
        icon: "home",
        text: "Home"
    }, {
        state: "app.promo",
        icon: "heart",
        text: "Promo"
    }, {
        state: "app.product",
        icon: "pricetags",
        text: "Produk"
    }, {
        state: "app.article",
        icon: "book",
        text: "Artikel"
    }, {
        state: "app.service",
        icon: "briefcase",
        text: "Service"
    }, {
        state: "app.branch",
        icon: "location",
        text: "Cabang"
    }, {
        state: "app.terms",
        icon: "paper",
        text: "Syarat & Ketentuan"
    }, {
        state: "app.contact",
        icon: "email",
        text: "Hubungi Kami"
    }, {
        state: "app.about",
        icon: "information",
        text: "Tentang Kami"
    }], t.user_menus = [{
        state: "app.profile",
        icon: "person",
        text: "Profil",
        isAndroid: !0
    }, {
        state: "app.photo",
        icon: "medkit",
        text: "Konsultasi Foto",
        isAndroid: !0
    }, {
        state: "app.video",
        icon: "videocam",
        text: "Video Consultation",
        isAndroid: ionic.Platform.isAndroid()
    }, {
        state: "app.orders",
        icon: "list",
        text: "Pesanan Saya",
        isAndroid: !0
    }], t.setAllStatus = function() {
        t.full_name = o.get("name"), t.mobile_session = o.get("mobile_session"), t.gender = o.get("gender"), t.profile_picture = o.get("profile_picture"), t.email = o.get("email"), t.isGetInternet = !1
    }, t.cartEditQty = function(prod_qty,prod_id) {
        var a = "https://klinikestetika.com/api/v1/estetika/product/cart/edit/qty";
        var post_data = {id: prod_id, qty: prod_qty, mobile_session: o.get("mobile_session"), session: o.get("session")}
        i.post(a, post_data
        ).then(function(n) {
            //1 !== n.data && t.showToast("Harus memiliki Resep", "long", "bottom")
            t.getAllCartItems()
            console.log("cartEditQty results: " + JSON.stringify(n))      
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.clearAllCarts = function() {
        i.get("https://klinikestetika.com/api/v1/estetika/product/cart/destroy/destroy/" + o.get("session") + "/" + o.get("mobile_session")).then(function(n) {
            t.getAllCartItems()
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.cartEditSize = function(n, e, a) {
        var s = "https://klinikestetika.com/api/v1/estetika/product/cart/edit/size";
        i.post(s, {
            id: a,
            qty: n,
            size: e,
            mobile_session: o.get("mobile_session"),
            session: o.get("session")
        }).then(function(n) {
            //1 !== n.data && t.showToast("Harus memiliki Resep", "long", "bottom"), t.getAllCartItems()                        
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.setAllStatus(), t.attributes = ["name", "email", "mobile_session", "gender", "profile_picture", "session"], t.clearStatus = function() {
        t.attributes.forEach(function(n) {
            return o.set(n, ""), "name" !== n ? t[n] = o.get(n) : t.full_name = o.get(n), n
        })
    }, t.getAllCartItems = function() {
        t.cart_total = 0, t.shipping_price = 0, t.total_price = 0, t.product_cart_qty = [], t.product_cart_sizes = [], t.product_cart_size = [];
        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        t.qty_options = n.map(function(t) {
            return {
                id: t,
                name: t.toString()
            }
        });
        var e = "" == o.get("mobile_session") ? 0 : 1;
        i.get("https://klinikestetika.com/api/v1/estetika/product/cart/" + e + "/" + o.get("mobile_session") + "/" + o.get("session")).then(function(n) {
            console.log("Cart contents: ", n), t.product_carts = n.data, t.isCartEmpty = !0;
            for (var e in t.product_carts) {
                t.product_cart_sizes[e] = [], t.isCartEmpty = !1;
                var a = "1" == t.product_carts[e].name ? "1" : "2";
                for (var i in t.product_carts[e].size_available) {
                    var o = "1" == t.product_carts[e].size_available[i][0] ? "1" : "1/2";
                    t.product_cart_sizes[e][i] = {
                        name: o,
                        id: t.product_carts[e].size_available[i][0],
                        product_id: t.product_carts[e].id
                    }, a == t.product_carts[e].size_available[i][0] && (t.product_cart_size[e] = t.product_cart_sizes[e][i])
                }
                t.product_cart_qty[e] = t.qty_options[t.product_carts[e].qty - 1], t.product_carts[e].product_key = e, t.cart_total = t.cart_total + t.product_carts[e].price * t.product_carts[e].qty
            }
            console.log("Product Cart Size", t.product_cart_size), console.log("Product Cart Sizes", JSON.stringify(t.product_cart_sizes, null, 2))
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.deleteCartItem = function(n) {
        var e = t.product_carts.find(function(t) {
            return t.id == n
        });
        console.log("Product Carts", e), t.product_carts = t.product_carts.filter(function(t) {
            return t.id !== n
        }), console.log("Product Carts", t.product_carts), t.product_cart_size = t.product_cart_size.filter(function(t) {
            return t.product_id !== n
        }), console.log("Product Cart Size", t.product_cart_size), t.product_cart_sizes = t.product_cart_sizes.map(function(t) {
            return t.filter(function(t) {
                return t.product_id !== n
            })
        }).filter(function(t) {
            return 0 !== t.length
        }), console.log(t.product_cart_sizes), t.product_carts.length || (t.isCartEmpty = !0, v.toggleRight()), t.cart_total -= e.price, o.set('cart_total', t.cart_total)
    }, t.refreshCart = function() {
        t.getAllCartItems(), t.$broadcast("scroll.refreshComplete")
    }, t.generateRandomNumber = function(t) {
        for (var n = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = 0; a < t; a++) n += e.charAt(Math.floor(Math.random() * e.length));
        return n
    }, t.addNewCartItem = function(n) {
        var e = o.get("mobile_session");
        if (console.log(e), e) {
            var a = 1;
            i.get("https://klinikestetika.com/api/v1/estetika/product/cart/add/" + a + "/" + e + "/" + o.get("session") + "/" + n).then(function(n) {
                t.data = n.data, 0 == t.data.status ? t.data.is_old_patient || t.showPrompt("consultation") : 2 == t.data.status ? t.showPrompt("login") : (t.showToast("Sukses Menambah Barang", "long", "bottom"), t.getAllCartItems())
            }, function(t) {
                console.error("ERR", t)
            })
        } else t.showPrompt("login")
    }, t.getAllCartItems(), document.addEventListener("deviceready", function() {
        g.getNetwork();
        t.isGetInternet = !!g.isOnline(), g.isOffline() && t.showToast("Aktifkan Koneksi Internet Anda. Aplikasi Ini Tidak Bisa Berjalan Tanpa Koneksi Internet", "long", "bottom")
    }, !1), t.popupShow = function(t, n) {
        var e = {
            text: t,
            type: n,
            interval: 3e3,
            autoClose: 1e4,
            transition: "fade",
            cancelOnStateChange: !1
        };
        r.show(e)
    }, t.showToast = function(t, n, e) {
        if (!window.cordova) return void window.alert(t);
        var a = f.alert({
            title: "Estetika Mobile App",
            template: t
        });
        a.then(function(t) {
            console.log("The popup was shown")
        }, function(t) {
            console.log("The popup was not shown due to " + t)
        })
    }, t.showPrompt = function(n) {
        var e = "consultation" == n ? "Harap konsultasi untuk mendapatkan resep dokter" : "Harap login terlebih dahulu";
        if (window.cordova) {
            var a = f.confirm({
                title: e,
                okText: "consultation" == n ? "Konsultasi Sekarang" : "Login"
            });
            a.then(function(e) {
                console.log(e), e && ("consultation" == n ? t.openConsultation() : t.login())
            })
        } else {
            var a = window.confirm(e);
            console.log(a), a && ("consultation" == n ? t.openConsultation() : t.login())
        }
    }, t.openConsultation = function() {
        if (o.get("mobile_session"))
            if (ionic.Platform.isAndroid()) {
                var n = {
                    androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
                    title: "Konsultasi",
                    buttonLabels: ["Konsultasi Foto", "Konsultasi Video Langsung"],
                    addCancelButtonWithLabel: "Cancel",
                    androidEnableCancelButton: !0,
                    winphoneEnableCancelButton: !0
                };
                b.show(n).then(function(t) {
                    switch (console.log(t), t) {
                        case 1:
                            u.go("app.photo");
                            break;
                        case 2:
                            u.go("app.video")
                    }
                })
            } else u.go("app.photo");
        else t.showPrompt("login")
    }, t.openExternal = function(t, n) {
        if (window.cordova && void 0 !== typeof k) {
            var e = {
                location: "no",
                clearsessioncache: "no"
            };
            k.open(t, n, e).then(function(t) {})["catch"](function(t) {})
        } else window.open(t)
    }, t.getPicture = function(n, e, a, s) {
        var r = {
            androidTheme: window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
            title: e,
            buttonLabels: ["Using Camera", "Get From Gallery"],
            addCancelButtonWithLabel: "Cancel",
            androidEnableCancelButton: !0,
            winphoneEnableCancelButton: !0
        };
        t.buttonIndex = 0, b.show(r).then(function(e) {
            if (t.buttonIndex = e, 3 != e) {
                var r = 1 == e ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.PHOTOLIBRARY,
                    c = {
                        quality: 80,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: r,
                        allowEdit: !0,
                        encodingType: Camera.EncodingType.JPEG,
                        cameraDirection: 1,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: !0,
                        correctOrientation: !0
                    };
                l.getPicture(c).then(function(e) {
                    if ("" != e) {
                        t.image = document.getElementById(n);
                        var l = "profilePicture" == n ? document.getElementById("avatar") : null;
                        if (t.image.src = "data:image/jpeg;base64," + e, l && (l.src = t.image.src), t.successImage = 1, 1 == t.successImage && 1 == a) {
                            t.successImage = 0;
                            var r = document.getElementById(n);
                            i.post(s, {
                                imageBase64: r.src,
                                mobile_session: o.get("mobile_session")
                            }).then(function(n) {
                                1 == n.data ? t.showToast("Berhasil Mengupload Foto", "long", "bottom") : t.showToast("Gagal Mengupload Foto", "long", "bottom")
                            }, function(t) {
                                console.error("ERR", t)
                            })
                        }
                    }
                }, function(n) {
                    t.successImage = 0
                })
            }
        })
    }, t.showLoading = function() {
        p.show({
            noBackdrop: !0
        })
    }, n.fromTemplateUrl("templates/login.html", {
        scope: t
    }).then(function(n) {
        t.loginModal = n
    }), t.closeLogin = function() {
        t.loginModal.hide()
    }, t.login = function() {
        t.loginModal.show()
    }, t.doLogin = function() {
        p.show(), i.post("https://klinikestetika.com/api/v1/estetika/login", {
            email: t.loginData.email,
            password: t.loginData.password
        }).then(function(n) {
            console.log(n), p.hide(), 0 == n.data ? t.showToast("Login gagal. Silahkan periksa kembali alamat email dan password Anda", "long", "bottom") : (t.data = n.data, t.attributes.forEach(function(n) {
                "name" !== n && "profile_picture" !== n && "session" !== n ? o.set(n, t.data[n]) : "profile_picture" == n ? o.set(n, t.data.picture) : "session" == n ? o.set(n, t.generateRandomNumber(100)) : o.set(n, t.data.full_name)
            }), t.setAllStatus(), t.closeLogin())
        }, function(n) {
            p.hide(), t.showToast("Something When Wrong", "long", "bottom"), console.error("ERR", n)
        }), a(function() {}, 1e3)
    }, t.logout = function() {
        v.toggleLeft(), p.show(), t.clearStatus(), c.clearCache(), c.nextViewOptions({
            disableBack: !0
        }), p.hide(), u.go("app.home"), t.isCartEmpty = !0, t.showToast("Anda berhasil logout", "long", "bottom")
    }, n.fromTemplateUrl("templates/register.html", {
        scope: t
    }).then(function(n) {
        t.modalRegister = n
    }), t.closeRegister = function() {
        t.modalRegister.hide()
    }, t.register = function() {
        t.modalRegister.show()
    }, n.fromTemplateUrl("templates/forgot-password.html", {
        scope: t
    }).then(function(n) {
        t.modalForgotPassword = n
    }), t.closeForgotPassword = function() {
        t.modalForgotPassword.hide()
    }, t.forgotPasswordForm = function() {
        t.modalForgotPassword.show()
    }, t.goConsult = function() {
        console.log(o.get("mobile_session")), void 0 != o.get("mobile_session") ? u.go("app.photo") : t.login()
    }, t.registerAccount = function() {
        console.log(t.registerData), t.registerData.dob ? t.registerData.password !== t.registerData.passwordConfirmation ? t.showToast("Password dan Password Konfirmasi Harus Sama!", "long", "bottom") : t.registerData.phone ? i.post("https://klinikestetika.com/api/v1/estetika/register", {
            email: t.registerData.email,
            password: t.registerData.password,
            passwordConfirmation: t.registerData.passwordConfirmation,
            phone: t.registerData.phone,
            gender: t.registerData.gender,
            full_name: t.registerData.full_name,
            is_old_patient: t.registerData.is_old_patient,
            dob_year: t.registerData.dob.getUTCFullYear(),
            dob_month: t.registerData.dob.getUTCMonth() + 1,
            dob_date: t.registerData.dob.getDate()
        }).then(function(n) {
            console.log(n), 0 == n.data ? t.showToast("Gagal melakukan Pendaftaran", "long", "bottom") : (t.closeLogin(), t.closeRegister(), t.showToast("Anda Berhasil Melakukan Pendaftaran. Periksa Email Anda Untuk Melakukan Aktivasi", "long", "bottom"))
        }, function(n) {
            console.error("ERR", n), "Email address is not unique" == n.data.detail ? t.showToast("Harap registrasi akun menggunakan alamat email yang berbeda") : "Internal Server Error" == n.statusText && t.showToast("Harap isi form registrasi akun dengan benar")
        }) : t.showToast("Batas minimal dan maksimal nomor telepon yang diisi masing-masing  10 dan 12 angka", "long", "bottom") : t.showToast("Usia minimum 14 tahun", "long", "bottom")
    }, t.forgotPassword = function() {
        console.log(t.forgotPasswordData), i.post("https://klinikestetika.com/api/v1/estetika/forgot_password", {
            email: t.forgotPasswordData.email
        }).then(function(n) {
            console.log(n), 0 == n.data ? t.showToast("Gagal melakukan Reset Password", "long", "bottom") : (t.closeLogin(), t.closeRegister(), t.showToast("Password Anda Berhasil Direset. Periksa Email Anda untuk melanjutkan proses!", "long", "bottom"))
        }, function(n) {
            console.error("ERR", n), "Email address is not found" == n.data.detail ? t.showToast("Harap registrasi akun menggunakan alamat email yang berbeda") : "Internal Server Error" == n.statusText && t.showToast("Harap isi form Lupa Password dengan benar")
        })
    }, t.getProvinces = function() {
        t.provinces = [], i.get("https://klinikestetika.com/api/v1/estetika/provinces").then(function(n) {
            t.provinces = n.data.map(function(t) {
                return t
            })
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.getCities = function(n) {
        t.cities = [], i.get("https://klinikestetika.com/api/v1/estetika/cities/" + n).then(function(n) {
            t.cities = n.data.map(function(t) {
                return t
            })
        }, function(t) {
            console.error("ERR", t)
        })
    }
}]), angular.module("estetika").controller("PaymentController", ["$scope", "$ionicTabsDelegate", "$http", "$localstorage", function(t, n, e, a) {
    t.selectTabWithIndex = function(t) {
        n.select(t)
    }
}]).controller("OrderIndexController", ["$scope", "$http", "$localstorage", function(t, n, e) {
    t.orders = [], t.totalNext = 10, t.totalNow = 0,
        t.theEnd = !1, t.total = 0, t.is_loading = 0, t.loadMore = function() {
            t.is_loading = 1, n.get("https://klinikestetika.com/api/v1/estetika/user/orders/" + e.get("mobile_session") + "/" + t.totalNow + "/10").then(function(n) {
                0 == n.data ? t.theEnd = !0 : (t.totalNow = t.totalNext, t.totalNext = t.totalNext + 10, t.orders = t.orders.concat(n.data.map(function(n) {
                    return t.total++, n
                })), t.total = t.total + 1), t.$broadcast("scroll.infiniteScrollComplete"), t.is_loading = 0
            }, function(t) {
                console.error("ERR", t)
            })
        }, t.refreshOrders = function() {
            t.totalNow = 0, t.totalNext = 10, t.orders = [], t.theEnd = !1, t.total = 0, t.loadMore(), t.$broadcast("scroll.refreshComplete")
        }
}]).controller("OrderDetailController", ["$ionicLoading", "$scope", "$http", "$stateParams", "$localstorage", "$ionicSideMenuDelegate", function(t, n, e, a, i, o) {
    n.$on("$ionicView.enter", function() {
        o.canDragContent(!1)
    }), n.$on("$ionicView.leave", function() {
        o.canDragContent(!0)
    });
    var s = ["shipping_price", "subtotal", "total_price"];
    e.get("https://klinikestetika.com/api/v1/estetika/user/orders/" + i.get("mobile_session") + "/" + a.order_no).then(function(t) {
        for (var e in t.data) s.indexOf(e) !== -1 && (t.data[e] = t.data[e].replace("Rp ", ""), console.log(t.data[e]));
        n.data = t.data, console.log("Sauccess", n.data), n.products = n.data.products
    }, function(t) {
        n.showToast("Maaf ada kesalahan pada saat mengambil detail order", "long", "bottom"), console.error("ERR", t)
    }), n.refreshDetailOrder = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/user/orders/" + i.get("mobile_session") + "/" + a.order_no).then(function(t) {
            console.log("Success", t), n.data = t.data, n.products = n.data.products, n.$broadcast("scroll.refreshComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }
}]).controller("OrderPaymentController", ["$location", "$sce", "$rootScope", "$scope", "Scopes", "$http", "$stateParams", "$localstorage", "$state", "$ionicModal", "$cordovaInAppBrowser", function(t, n, e, a, i, o, s, l, r, c, d) {
    a.elementHeight = document.getElementById("orders-content").offsetHeight, a.iframeWrapperStyle = {
        position: "relative",
        "padding-bottom": "56.25%",
        "padding-top": "30px",
        height: a.elementHeight + "px",
        overflow: "hidden"
    };
    c.fromTemplateUrl("templates/payments/doku.html", {
        scope: a
    }).then(function(t) {
        a.modalDoku = t
    }), c.fromTemplateUrl("templates/payments/bca-clickpay.html", {
        scope: a
    }).then(function(t) {
        a.modalClickpay = t
    }), a.openDokuModal = function() {
        var t = "https://klinikestetika.com/product/checkout/payment/" + s.token + "/doku";
        window.open(t, "_blank")
    }, a.openClickpayModal = function() {
        var t = "https://klinikestetika.com/product/checkout/payment/" + s.token + "/shortcart";
        window.open(t, "_blank")
    }, a.closeDokuModal = function() {
        a.modalDoku.hide()
    }, a.closeClickpayModal = function() {
        a.modalClickpay.hide()
    }, a.dokuUrl = n.trustAsResourceUrl("https://klinikestetika.com/product/checkout/payment/" + s.token + "/doku"), a.shortcartUrl = n.trustAsResourceUrl("https://klinikestetika.com/product/checkout/payment/" + s.token + "/shortcart")
}]).controller("ShippingController", ["$location", "$ionicLoading", "$sce", "$rootScope", "$scope", "$http", "$stateParams", "$localstorage", "$cordovaInAppBrowser", "$state", "$ionicHistory", function(t, n, e, a, i, o, s, l, r, c, d) {
    var u = !1;
    if ("" != i.mobile_session && i.mobile_session) var p = 1;
    else var p = 0;
    o.get("https://klinikestetika.com/api/v1/estetika/product/cart/" + p + "/" + l.get("mobile_session") + "/" + l.get("session")).then(function(t) {}), i.shippingData = {
        total: s.total,
        province: 13,
        city: 189        
    }, o.get("https://klinikestetika.com/api/v1/estetika/profile/" + l.get("mobile_session")).then(function(t) {        
        //0 !== t.data ? (i.data = t.data, i.shippingData.full_name = i.data.full_name, i.shippingData.email = i.data.email, i.shippingData.phone = i.data.phone, i.shippingData.dob = new Date(i.data.dob), i.shippingData.gender = i.data.gender, i.shippingData.picture = i.data.picture, i.shippingData.address = i.data.address, i.shippingData.postal_code = i.data.postal_code, i.shippingData.province = i.data.province_id, i.shippingData.is_old_patient = 0, i.shippingData.city = i.data.city_id, i.shippingData.password = "", i.shippingData.newUser = 0, i.getProvinces(), i.getCities(i.shippingData.province), i.getShippingPrice(i.data.city_id), i.shippingData.shipping_price = i.getShippingPrice(i.data.city_id), i.shippingData.cart_total = i.cart_total, i.shippingData.total_price = parseFloat(i.shippingData.shipping_price) + parseFloat(i.shippingData.cart_total)) : (i.shippingData.newUser = 1, i.getProvinces(), i.getCities(i.shippingData.province), i.shippingData.dob = new Date("2015-01-01"), i.shippingData.shipping_price = i.getShippingPrice(i.data.city_id))
        if (t.data !== 0){
            i.data = t.data
            i.shippingData.full_name = i.data.full_name
            i.shippingData.email = i.data.email
            i.shippingData.phone = i.data.phone
            i.shippingData.dob = new Date(i.data.dob)
            i.shippingData.gender = i.data.gender
            i.shippingData.picture = i.data.picture
            i.shippingData.address = i.data.address
            i.shippingData.postal_code = i.data.postal_code
            i.shippingData.province = i.data.province_id
            i.shippingData.is_old_patient = 0
            i.shippingData.city = i.data.city_id
            i.shippingData.password = ""
            i.shippingData.newUser = 0
            i.shippingData.discount = 0
            i.getProvinces()
            //i.checkPromoCode()
            i.getCities(i.shippingData.province)
            i.getShippingPrice(i.data.city_id)
            i.shippingData.shipping_price = i.getShippingPrice(i.data.city_id)
            i.shippingData.cart_total = i.cart_total
            i.getTotalPrice(i.cart_total, i.shippingData.shipping_price, i.shippingData.discount)
           
            //i.shippingData.total_price = parseFloat(i.shippingData.shipping_price) + parseFloat(i.shippingData.cart_total)
        }else{
            i.shippingData.newUser = 1
            i.getProvinces()
            i.getCities(i.shippingData.province)
            i.shippingData.dob = new Date("2015-01-01")
            i.shippingData.shipping_price = i.getShippingPrice(i.data.city_id)
        }
        alert(i.shippingData.shipping_price + " " + i.shippingData.cart_total)
        console.log("Total: ", i.shippingData.total_price)
    }, function(t) {
        console.error("ERR", t)
    }), i.checkPromoCode = function() {
        i.shippingData.promo ? (n.show(), i.addDiscount()) : (i.shippingData.discount = 0, i.showToast("Masukkan kode promo terlebih dahulu", "long", "bottom"))
    }, i.addDiscount = function() {
        u ? (n.hide(), i.showToast("Anda telah memasukkan kode Promo", "long", "bottom")) : window.setTimeout(function() {
            n.hide(), u = !0, i.shippingData.total = .9 * i.shippingData.total, console.log(i.shippingData.total), i.showToast("Anda mendapatkan potongan harga 10%", "long", "bottom")
        }, 1e3)
    }, i.getShippingPrice = function(s) {        
        o.get("https://klinikestetika.com/api/v1/estetika/get_shipping_price/" + s).then(function(o) {
            console.log("Shipping Price", o.data), i.shippingData.shipping_price = o.data.data.shipping_price
            i.shippingData.total_price = i.getTotalPrice(i.cart_total, i.shippingData.shipping_price, i.shippingData.discount)
            return i.shippingData.shipping_price
        })    
    }, i.getTotalPrice = function(cart_total, shipping_price, discount) {
        null === discount ? discount = 0 : discount = discount
        return parseFloat(cart_total) + parseFloat(shipping_price) - parseFloat(discount)
    }, i.checkoutOrder = function() {
        n.show();
        var t = !!l.get("mobile_session");
        t ? i.shippingData.mobile_session = l.get("mobile_session") : (i.shippingData.mobile_session = 0, i.shippingData.full_name && i.shippingData.gender && i.shippingData.dob && i.shippingData.phone && i.shippingData.email || (i.showToast("Semua Kolom Harus Diisi!", "long", "bottom"), n.hide())), i.shippingData.province && i.shippingData.city && i.shippingData.address || (i.showToast("Semua Kolom Harus Diisi!", "long", "bottom"), n.hide()), o.post("https://klinikestetika.com/api/v1/estetika/checkout_shipping", {
            full_name: t ? null : i.shippingData.full_name,
            gender: t ? null : i.shippingData.gender,
            phone: t ? null : i.shippingData.phone,
            dob: t ? null : i.shippingData.dob,
            email: t ? null : i.shippingData.email,
            password: t ? null : i.shippingData.password,
            is_old_patient: t ? null : i.shippingData.is_old_patient,
            province: i.shippingData.province,
            city: i.shippingData.city,
            postal_code: i.shippingData.postal_code,
            total_price: i.shippingData.total_price,
            promo_code: i.shippingData.promo_code,
            shipping_price: i.shippingData.shipping_price,
            discount: i.shippingData.discount,
            address: i.shippingData.address,
            newUser: i.shippingData.newUser,
            mobile_session: i.shippingData.mobile_session,
            session: l.get("session")
        }).then(function(t) {
            0 != t.data ? (i.refreshCart(), i.showToast("Berhasil Melakukan Pemesanan", "long", "bottom"), n.hide(), c.go("app.orders_payment", {
                token: t.data
            })) : (n.hide(), i.showToast("Gagal Melakukan Pemesanan", "long", "bottom"))
        }, function(t) {
            console.error("ERR", t), n.hide()
        })
    }
}]), angular.module("estetika").controller("ProductsController", ["$scope", "$location", "$http", "$ionicLoading", "$ionicFilterBar", function(t, n, e, a, i) {
    t.totalNext = 15, t.totalNow = 0, t.categories = [], t.category = 1, t.products = [], t.theEnd = !1, t.states = {
        loading: !0,
        searched: !1
    }, e.get("https://klinikestetika.com/api/v1/estetika/product/category").then(function(n) {
        t.states.loading = !1, t.categories = n.data.map(function(t) {
            return t
        })
    }, function(n) {
        t.states.loading = !1, console.error("ERR", n)
    }), t.loadProducts = function() {
        t.showLoading(), e.get("https://klinikestetika.com/api/v1/estetika/products/category/" + t.category + "/0/15").then(function(n) {
            a.hide(), t.products = n.data
        })
    }, t.loadMore = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/products/category/" + t.category + "/" + t.totalNow + "/15").then(function(n) {
            0 == n.data ? (t.theEnd = !0, console.log("End of records is reached")) : (t.totalNow = t.totalNext, t.totalNext += 15, t.products = t.products.concat(n.data.map(function(t) {
                return t
            }))), t.$broadcast("scroll.infiniteScrollComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.refreshProduct = function() {
        o && (o(), o = null), t.totalNow = 0, t.totalNext = 15, t.products = [], t.theEnd = !1, t.loadMore(), t.$broadcast("scroll.refreshComplete")
    }, t.categoryChange = function(n) {
        t.category = n, t.totalNow = 0, t.totalNext = 15, t.products = [], t.theEnd = !1, t.loadMore()
    };
    var o;
    t.showFilterBar = function() {
        t.states.searched = !0, o = i.show({
            debounce: !0,
            delay: 1e3,
            items: t.products,
            update: s,
            cancel: l
        })
    };
    var s = function(n, i) {
            i && (t.filterText = i, t.states.loading = !0, t.showLoading(), e.get("https://klinikestetika.com/api/v1/estetika/product/search/" + i + "?token=gkrWlsJAa9H6YoIDOKV4Cu13sYOqbEpW").then(function(n) {
                a.hide(), console.log(n.data), t.products = n.data, t.theEnd = !0
            }))
        },
        l = function() {
            t.states.searched = !1, t.theEnd = !1, t.loadProducts()
        }
}]).controller("ProductDetailController", ["$scope", "$http", "$stateParams", "$ionicLoading", "$ionicSideMenuDelegate", "$ionicNavBarDelegate", function(t, n, e, a, i, b) {
    t.$on("$ionicView.enter", function() {
        i.canDragContent(!1)
        t.detail_page = 1        
    }), t.$on("$ionicView.leave", function() {
        i.canDragContent(!0)
        t.detail_page = 0
    }), n.get("https://klinikestetika.com/api/v1/estetika/product/" + e.product_id).then(function(n) {
        console.log("Success", n), t.data = n.data
    }, function(n) {
        t.showToast("Maaf ada kesalahan pada saat mengambil detail produk", "long", "bottom"), console.error("ERR", n)
    }), function(t, b) {
        var goBack = function() {
            b.back()
        }
    }, t.refreshDetailProduct = function() {
        n.get("https://klinikestetika.com/api/v1/estetika/product/" + e.product_id).then(function(n) {
            console.log("Success", n), t.data = n.data, t.$broadcast("scroll.refreshComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }
}]), angular.module("estetika").controller("PromoController", ["$ionicLoading", "$scope", "$http", "$stateParams", "$localstorage", "Scopes", "$ionicSlideBoxDelegate", "$state", function(t, n, e, a, i, o, s, l) {
    n.banners = [], n.showLoading(), e.get("https://klinikestetika.com/api/v1/estetika/banners").then(function(e) {
        n.banners = e.data.data.filter(function(t) {
            return 1 == t.is_active
        }).sort(function(t, n) {
            return t.order > n.order ? 1 : -1
        }).map(function(t) {
            return t.updated_at = moment(t.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY"), t
        }), t.hide(), s.update()
    }, function(t) {
        console.error("ERR", t)
    }), n.loadArticle = function(t) {
        null !== t.article_id && l.go("app.article_detail", {
            article_id: t.article_id,
            article_date: t.updated_at
        })
    }
}]), angular.module("estetika").controller("SettingsController", ["$scope", function(t) {}]), angular.module("estetika").controller("TermsAndConditionsController", ["$scope", function(t) {}]), angular.module("estetika").controller("ProfileController", ["$scope", "$http", "$stateParams", "$localstorage", "$ionicLoading", function(t, n, e, a, i) {
    t.profileData = {}, t.showLoading(), n.get("https://klinikestetika.com/api/v1/estetika/profile/" + a.get("mobile_session")).then(function(n) {
        console.log("Profile", n), t.data = n.data, t.profileData.full_name = t.data.full_name, t.profileData.email = t.data.email, t.profileData.phone = t.data.phone, t.profileData.dob = new Date(t.data.dob), t.profileData.gender = t.data.gender, t.profileData.picture = t.data.picture, t.profileData.address = t.data.address, t.profileData.postal_code = parseInt(t.data.postal_code), t.profileData.province = parseInt(t.data.province_id), t.profileData.city = parseInt(t.data.city_id), t.data.picture !== a.get("profile_picture") && (a.set("profile_picture", t.data.picture), document.getElementById("avatar").src = t.data.picture), a.set('province_id', t.profileData.province), a.set('city_id', t.profileData.city), i.hide()
    }, function(n) {
        i.hide(), t.showToast("Maaf ada kesalahan pada saat mengambil data profil", "long", "bottom"), console.error("ERR", n)
    }), t.getProfPic = function() {
        t.getPicture("profilePicture", "Foto Profil", !0, "https://klinikestetika.com/api/v1/estetika/change_profile_picture")
    }, t.changeProfile = function() {
        n.post("https://klinikestetika.com/api/v1/estetika/change_profile", {
            full_name: t.profileData.full_name,
            email: t.profileData.email,
            phone: t.profileData.phone,
            dob: t.profileData.dob,
            gender: t.profileData.gender,
            address: t.profileData.address,
            postal_code: t.profileData.postal_code,
            city: t.profileData.city,
            mobile_session: a.get("mobile_session")
        }).then(function(n) {
            var e = [{
                name: "email",
                value: t.profileData.email
            }, {
                name: "name",
                value: t.profileData.full_name
            }, {
                name: "gender",
                value: t.profileData.gender
            }];
            e.map(function(t) {
                return a.set(t.name, t.value)
            }), t.full_name = a.get("name"), t.mobile_session = a.get("mobile_session"), t.showToast("Berhasil Menyimpan Profil", "long", "bottom")
        }, function(t) {
            console.error("ERR", t)
        })
    }, n.get("https://klinikestetika.com/api/v1/estetika/provinces").then(function(e) {
            console.log("Provinces: ", e), t.profileData.provinces = [], t.profileData.provinces = e.data.map(function(t) {
            return t
        }), 
        n.get("https://klinikestetika.com/api/v1/estetika/cities/" + a.get('province_id')).then(function(n) {
            console.log("Cities: ", n), t.profileData.cities = [], t.profileData.cities = n.data.map(function(t) {
                return t
            })
        }, function(t) {
            console.error("ERR", t)
        })
    }, function(t) {
        console.error("ERR", t)
    }), t.getCity = function(e) {
        n.get("https://klinikestetika.com/api/v1/estetika/cities/" + e).then(function(n) {
            console.log("Success", n), t.profileData.cities = [], t.profileData.cities = n.data.map(function(t) {
                return t
            })
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.changePassword = function() {
        n.post("https://klinikestetika.com/api/v1/estetika/change_password", {
            password_lama: t.profileData.passwordLama,
            password_baru: t.profileData.passwordBaru,
            mobile_session: a.get("mobile_session")
        }).then(function(n) {
            t.showToast(1 == n.data ? "Berhasil Mengubah Password" : "Gagal Merubah Password", "long", "bottom"), t.profileData.passwordLama = "", t.profileData.passwordBaru = ""
        }, function(t) {
            console.error("ERR", t)
        })
    }
}]), angular.module("estetika").controller("video_consultation_index", ["$http", "$scope", "$localstorage", "$ionicLoading", "$state", "$interval", function(t, n, e, a, i, o) {
    function s(t) {
        t.start_time = moment(t.starts_at, "YYYY-MM-DD HH:mm:ss").format("HH:mm"), t.end_time = moment(t.ends_at, "YYYY-MM-DD HH:mm:ss").format("HH:mm"), t.date = moment(t.starts_at, "YYYY-MM-DD HH:mm:ss").format("dddd, D MMMM YYYY"), t.time_remaining = n.calculateTimeRemaining(t.starts_at)
    }
    n.bookedSession = [], n.bookedSessionData = null, n.checkAvailableSessions = function() {
        n.availableSessions = [], n.showLoading(), t.get("https://klinikestetika.com/api/v1/estetika/video-consultation/all-sessions/" + e.get("mobile_session") + "?token=gkrWlsJAa9H6YoIDOKV4Cu13sYOqbEpW").then(function(t) {
            var e = t.data.data;
            1 == e.user_sessions.length && (n.bookedSession.push(e.user_sessions[0]), n.bookedSessionData = e.user_sessions[0], s(n.bookedSessionData), console.log(n.bookedSession));
            for (var i in e.sessions) n.availableSessions.push({
                date: moment(e.sessions[i][0].starts_at, "YYYY-MM-DD HH:mm:ss").format("dddd, D MMMM YYYY"),
                sessions: e.sessions[i].filter(function(t) {
                    return moment(t.starts_at, "YYYY-MM-DD HH:mm:ss").diff(moment(), "minutes") > 30 && "finished" !== t.status
                }).map(function(t) {
                    return t.start_time = moment(t.starts_at, "YYYY-MM-DD HH:mm:ss").format("HH:mm"), t.end_time = moment(t.ends_at, "YYYY-MM-DD HH:mm:ss").format("HH:mm"), t.date = moment(t.starts_at, "YYYY-MM-DD HH:mm:ss").format("dddd, D MMMM YYYY"), t.status = "waiting" == t.status ? "available" : t.status, t.isHidden = !(0 == e.user_sessions.length || !n.bookedSessionData) && t.id == e.user_sessions[0].id, t
                })
            });
            n.availableSessions = n.availableSessions.filter(function(t) {
                return t.sessions.length > 0
            }), console.log(n.availableSessions), a.hide()
        })
    }, n.isSessionFinished = function(t) {
        return "finished" == t.status || 1 == t.isHidden
    }, n.hasBookedSession = function() {
        return null !== n.bookedSessionData
    }, n.refreshAvailableSessions = function() {
        n.checkAvailableSessions(), n.$broadcast("scroll.refreshComplete")
    }, n.book = function(i) {
        0 == n.bookedSession.length ? (n.showLoading(), t.get("https://klinikestetika.com/api/v1/estetika/video-consultation/book-session/" + i.id + "/" + e.get("mobile_session") + "?token=gkrWlsJAa9H6YoIDOKV4Cu13sYOqbEpW").then(function(t) {
            a.hide(), n.bookedSession.push(i), n.bookedSessionData = i, console.log(n.foundSession);
            var e = t.data.data;
            n.showToast(e.message, "long", "bottom"), n.checkAvailableSessions(), console.log(e)
        })) : n.showToast("Anda telah booking sebelumnya. Harap hapus booking sebelumnya terlebih dahulu", "long", "bottom")
    }, n.cancelBook = function(e) {
        e.stopPropagation(), n.showLoading(), t.get("https://klinikestetika.com/api/v1/estetika/video-consultation/cancel-session/" + n.bookedSessionData.id + "?token=gkrWlsJAa9H6YoIDOKV4Cu13sYOqbEpW").then(function(t) {
            a.hide();
            var e = t.data.data;
            console.log(e), n.bookedSessionData = null, n.bookedSession = [], n.showToast(e.message, "long", "bottom"), n.checkAvailableSessions()
        })
    }, n.readyToConsultation = function(t) {
        var e = n.calculateRemainingHour(t.starts_at),
            a = e <= 0;
        moment(t.starts_at, "YYYY-MM-DD HH:mm:ss").subtract(1, "hours").calendar(null, {
            sameDay: "[hingga pukul] HH:mm",
            nextDay: "dddd [pukul] HH:mm",
            nextWeek: "[pada hari] dddd [pukul] HH:mm",
            sameElse: "[pada tanggal] D MMMM YYYY [pukul] HH:mm"
        });
        console.log(e, a), i.go("app.video_waiting", {
            session_id: t.id
        }), console.log(t.id)
    }, n.toggleGroup = function(t) {
        n.shownGroup = n.isGroupShown(t) ? null : t
    }, n.isGroupShown = function(t) {
        return n.shownGroup === t
    }, n.calculateRemainingHour = function(t) {
        return moment(t, "YYYY-MM-DD HH:mm:ss").diff(moment(), "hours")
    }, n.calculateTimeRemaining = function(t) {
        return "(" + moment(t, "YYYY-MM-DD HH:mm:ss").from(moment()).toString() + ")"
    };
    var l = o(function() {
        n.checkAvailableSessions(), console.log("1 menit berlalu")
    }, 6e4);
    n.checkAvailableSessions(), n.$on("$destroy", function() {
        o.cancel(l)
    })
}]).controller("video_consultation_waiting", ["$http", "$scope", "$localstorage", "$ionicLoading", "$stateParams", "$q", function(t, n, e, a, i, o) {
    n.opentokData = {
        apiKey: 45479692,
        sessionID: "2_MX40NTQ3OTY5Mn5-MTQ3ODI2NzE3MDc1MH5NWHRpWjZ3ZkMyT09RRTNsZGppYUJqQXF-UH4",
        token: "T1==cGFydG5lcl9pZD00NTQ3OTY5MiZzaWc9NjRjMzM3OGI5MGU0MTBhMWFhYWE3MjQzYmE4MTliMjZlMDc0N2Q2MDpzZXNzaW9uX2lkPTJfTVg0ME5UUTNPVFk1TW41LU1UUTNPREkyTnpFM01EYzFNSDVOV0hScFdqWjNaa015VDA5UlJUTnNaR3BwWVVKcVFYRi1VSDQmY3JlYXRlX3RpbWU9MTQ3ODI2NzQ3MyZyb2xlPXB1Ymxpc2hlciZub25jZT0xNDc4MjY3NDczLjkxNjk1MzM5MzUw"
    }, n.subscriber = void 0, n.publisher = void 0, n.session = void 0, n.publishing = !1, n.isSubscribing = !1, n.reconnecting = !1, n.textWarning = ["Persiapkan smartphone Anda", "Pastikan koneksi Anda stabil", "Pastikan kamera dan mikrofon Anda berfungsi dengan baik", "Atur pencahayaan di tempat Anda agar gambar terlihat jelas"], n.getAudioVideo = function() {
        var t = o.defer();
        return OT.getDevices(function(n, e) {
            n ? t.reject(n) : t.resolve({
                audio: e.find(function(t) {
                    return "audioInput" == t.kind
                }),
                video: e.find(function(t) {
                    return "videoInput" == t.kind
                })
            })
        }), t.promise
    }, n.initOpentok = function(t, e) {
        n.publisher = OT.initPublisher("publisher", {
            width: "40%",
            height: "30vh",
            fitMode: "cover",
            publishAudio: !0,
            publishVideo: !0,
            audioSource: e.audio.deviceId,
            videoSource: e.video.deviceId
        }), n.modifyStyle(n.publisher), n.refreshVideo(), n.session = OT.initSession(t.apiKey, t.sessionID), n.session.on({
            streamCreated: n.onStreamCreated,
            streamDestroyed: n.onStreamDestroyed
        }), n.session.connect(t.token, n.onSessionConnected)
    }, n.refreshVideo = function() {
        ionic.Platform.isIOS() && cordova.plugins.iosrtc.refreshVideos()
    }, n.modifyStyle = function(t) {
        var n = {
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: "0 8px 8px",
            zIndex: 1,
            border: "2px solid white"
        };
        for (var e in n) t.element.style[e] = n[e];
        console.log(t.element.style)
    }, n.onStreamCreated = function(t) {
        var e = {
            width: "100%",
            height: "100vh",
            fitMode: "cover"
        };
        n.isSubscribing || (n.subscriber = n.session.subscribe(t.stream, "subscriber", e), n.subscriber.element.style.zIndex = 0, n.refreshVideo(), n.isSubscribing = !0)
    }, n.onStreamDestroyed = function(t) {
        n.isSubscribing && t.stream.streamId === n.subscriber.stream.streamId && (n.session.unsubscribe(n.subscriber), n.isSubscribing = !1, n.subscriber = void 0)
    }, n.onSessionConnected = function(t) {
        n.session.publish(n.publisher)
    }, n.getSessionToken = function(e) {
        t.get("https://klinikestetika.com/api/v1/estetika/video-consultation/sessions/" + e + "?token=gkrWlsJAa9H6YoIDOKV4Cu13sYOqbEpW").then(function(t) {
            var e = t.data.data;
            n.opentokData.sessionID = e.opentok_token, n.opentokData.token = e.session_token, n.end_waiting_time = moment(e.starts_at, "YYYY-MM-DD HH:mm:ss").valueOf(), console.log(n.end_waiting_time), n.getAudioVideo().then(function(t) {
                console.log(t), n.initOpentok(n.opentokData, t)
            })
        })
    }, n.getSessionToken(i.session_id)
}]).controller("video_consultation_live", ["$http", "$scope", "$localstorage", "$ionicLoading", function(t, n, e, a) {}]), angular.module("estetika").factory("ApiService", ["$window", "$http", "API_ENDPOINT", function(t, n, e) {
    var a = e,
        i = a.port ? a.host + ":" + a.port + a.path : a.host + a.path;
    return a.needsAuth && (n.defaults.headers.common.Authorization = "Basic " + t.btoa(a.username + ":" + a.password)), {
        getEndpoint: function() {
            return i
        }
    }
}]).factory("Scopes", ["$rootScope", function(t) {
    var n = {};
    return {
        store: function(t, e) {
            n[t] = e
        },
        get: function(t) {
            return n[t]
        }
    }
}]), angular.module("estetika").factory("ExampleService", ["$http", "$timeout", "$q", function(t, n, e) {
    var a = 42,
        i = function() {
            var t = e.defer();
            return n(t.resolve.bind(null, a), 1e3), t.promise
        },
        o = function() {
            return t({
                url: "http://hipsterjesus.com/api",
                params: {
                    paras: 2
                },
                method: "GET"
            }).success(function(t) {
                console.log("fetched this stuff from server:", t)
            }).error(function(t) {
                console.log("an error occured", t)
            })
        };
    return {
        doSomethingAsync: i,
        fetchSomethingFromServer: o
    }
}]), angular.module("ngIOS9UIWebViewPatch", ["ng"]).config(["$provide", function(t) {
    t.decorator("$browser", ["$delegate", "$window", function(t, n) {
        function e(t) {
            return /(iPhone|iPad|iPod).* OS 9_\d/.test(t) && !/Version\/9\./.test(t)
        }

        function a(t) {
            function n() {
                e = null
            }
            var e = null,
                a = t.url;
            return t.url = function() {
                return arguments.length ? (e = arguments[0], a.apply(t, arguments)) : e || a.apply(t, arguments)
            }, window.addEventListener("popstate", n, !1), window.addEventListener("hashchange", n, !1), t
        }
        return e(n.navigator.userAgent) ? a(t) : t
    }])
}]), angular.module("estetika").factory("_", ["$window", function(t) {
    return t._
}]), angular.module("estetika").run(["$templateCache", function(t) {
        t.put("templates/login.html", '<ion-modal-view id="login"> <ion-header-bar class="bar bar-calm"><div class="buttons"> <button class="button button-clear" ng-click="closeLogin()"><i class="icon ion-ios-close-empty"></i></button></div><h1 class="title">Login</h1> </ion-header-bar> <ion-content><form ng-submit="doLogin()"><div class="list"> <label class="item item-input item-floating-label"> <span class="input-label">Email</span> <input type="email" ng-model="loginData.email" placeholder="Email"> </label> <label class="item item-input item-floating-label"> <span class="input-label">Password</span> <input type="password" ng-model="loginData.password" placeholder="Password"> </label></div><div class="padding"> <button class="button button-outline-black button-block" type="submit">Login</button></div></form><button class="button button-positive button-clear button-block" ng-click="register()" style="text-transform:inherit"><span style="color:black">Belum punya akun?</span> Daftar di sini</button> <button class="button button-positive button-clear button-block" ng-click="forgotPasswordForm()" style="text-transform:inherit"><span style="color:black">Lupa password?</span> Dapatkan kembali di sini</button> </ion-content> </ion-modal-view>'), 
        t.put("templates/main.html", '<ion-side-menus enable-menu-with-back-views="true"> <ion-side-menu-content> <ion-nav-bar class="bar-calm"> <ion-nav-buttons side="left"> <button menu-toggle="left" class="button button-icon button-clear ion-navicon"></button> </ion-nav-buttons> <ion-nav-buttons side="secondary"> <button menu-toggle="right" class="button button-icon button-clear ion-ios-cart"></button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view name="menuContent"></ion-nav-view> </ion-side-menu-content> <ion-side-menu side="right"><div class="bar bar-header bar-calm"><h2 class="title title-left"><strong>Keranjang Belanja</strong></h2> <button menu-close ng-hide="isCartEmpty" ng-click="clearAllCarts()" class="button button-clear text-capitalize">Kosongkan</button></div> <ion-content class="has-header has-footer"> <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshCart()"></ion-refresher><div class="list"><div ng-repeat="product_cart in product_carts" class="item" style="padding:0px"><div class="item item-avatar item-button-right item-text-wrap"> <img ng-src="{{product_cart.image}}"> <b style="font-size:14px">{{product_cart.title}}</b> <button class="button button-clear button-light button-small" ng-click="deleteCartItem(product_cart.id)"> <i class="icon ion-close"></i></button></div><div class="list"> <label class="item item-input item-select"><div class="input-label">Quantity</div> <select data-ng-options="qty_option.name for qty_option in qty_options" data-ng-model="product_cart_qty[product_cart.product_key]" ng-selected="product_cart.qty" ng-change="cartEditQty(product_cart_qty[product_cart.product_key].id, product_cart.id)"> </select> </label> <label class="item-input item-select"> <span class="input-label">Size</span> <select data-ng-options="size.name for size in product_cart_sizes[product_cart.product_key]" data-ng-model="product_cart_size[product_cart.product_key]" ng-change="cartEditSize(product_cart_qty[product_cart.product_key].id,product_cart_size[product_cart.product_key].id,product_cart.id)" ng-disabled="product_cart_sizes[product_cart.product_key].length == 1"> </select> </label><div class="item">{{ product_cart.price|currency:"Rp ":0 }}</div></div></div><button menu-close ng-show="!isCartEmpty" class="button button-full button-payment mg-t-0" ui-sref="app.product_shipping"> Ke Pembayaran <i class="icon ion-arrow-right-c"></i></button></div><div class="row responsive-md cart-info" ng-show="isCartEmpty"><p><em>Keranjang Belanja masih kosong</em></p></div> </ion-content> <ion-footer-bar ng-show="!isCartEmpty" class="bar bar-stable total"><div class="title text-left"> <i class="icon ion-android-cart" style="margin-right:10px"></i> <b>Total {{ cart_total|currency:"Rp " }}</b></div> </ion-footer-bar> </ion-side-menu> <ion-side-menu side="left"> <ion-content> <button menu-close class="item item-calm item-avatar" ng-if="mobile_session" ui-sref="app.profile" style="text-transform:inherit;text-align:left"> <img id="avatar" style="object-fit: cover" ng-if="!profile_picture" ng-src="images/user-default.png"> <img id="avatar" style="object-fit: cover" ng-if="profile_picture" ng-src="{{profile_picture}}"><h2 class="logged-in">{{full_name}}</h2><p class="logged-in">{{email}}</p> </button><button ng-repeat="menu in global_menus" menu-close class="button button-menu light-bg icon-left text-left button-full ion-ios-{{menu.icon}}-outline" ui-sref-active="active" ui-sref="{{menu.state}}"><p class="menu-text">{{menu.text}}</p> </button><button ng-if="!mobile_session" menu-close class="button button-menu light-bg icon-left text-left button-full ion-ios-locked-outline" ui-sref-active="active" ng-click="login()"><p>Login</p></button><div ng-if="mobile_session"><div class="item item-divider">Your Account</div> <button ng-repeat="menus in user_menus" menu-close class="button button-menu light-bg icon-left text-left button-full ion-ios-{{menus.icon}}-outline" ui-sref-active="active" ui-sref="{{menus.state}}" ng-show="menus.isAndroid"><p>{{menus.text}}</p></button> <button menu-close class="button button-menu light-bg icon-left text-left button-full ion-log-out" ui-sref-active="active" ng-click="logout()"><p>Logout</p></button></div> </ion-content> </ion-side-menu> </ion-side-menus>'), 
        t.put("templates/register.html", '<ion-modal-view id="register"><ion-header-bar class="bar bar-calm bar-header"><div class="buttons"><button class="button button-clear"ng-click="closeRegister()"><i class="icon ion-ios-close-empty"></i></button></div><h1 class="title">Daftar Akun</h1></ion-header-bar><ion-content><form id="register-form"name="form"novalidate><div class="list"><!--Nama Lengkap--><label class="item item-input item-stacked-label"><span class="input-label">Nama Lengkap<span style="color:red">*</span></span><input type="text"ng-model="registerData.full_name"name="fullName"placeholder="Nama lengkap Anda"required=""><div ng-show="form.$submitted || form.fullName.$touched"><div class="assertive"ng-show="form.fullName.$error.required">Masukkan Nama Lengkap Anda.</div></div></label><!--Gender--><div class="item item-input item-stacked-label"><span class="input-label">Jenis Kelamin<span style="color:red">*</span></span><label class="item item-select"><select ng-model="registerData.gender"name="gender"required=""><option ng-model="registerData.gender"value="L">Laki-laki</option><option ng-model="registerData.gender"value="F">Perempuan</option></select></label><div ng-show="form.$submitted || form.gender.$touched"><div class="assertive"ng-show="form.gender.$error.required">Pilih jenis kelamin</div></div></div><!--No.Telepon/HP--><label class="item item-input item-stacked-label"><span class="input-label">No.Telepon/HP<span style="color:red">*</span></span><input type="tel"ng-model="registerData.phone"name="phoneNumber"placeholder="(+62)"ng-minlength="10"ng-maxlength="12"required><div ng-show="form.$submitted || form.phoneNumber.$touched"><span class="assertive"ng-show="form.phoneNumber.$error.required">Masukkan nomor telepon/HP Anda</span><span class="assertive"ng-show="form.phoneNumber.$error.number">Masukkan nomor Telepon/HP Anda.</span><span class="assertive"ng-show="(form.phoneNumber.$error.minlength && form.phoneNumber.$dirty)">phone number should be 10 digits minimal.</span><span class="assertive"ng-show="(form.phoneNumber.$error.maxlength && form.phoneNumber.$dirty)">phone number should be 12 digits maximal.</span></div></label><!--Tanggal Lahir--><label class="item item-input item-stacked-label"><span class="input-label">Tanggal Lahir<span style="color:red">*</span></span><input type="date"min="1980-01-01"max="{{maxDob}}"ng-model="registerData.dob"name="dob"required><div ng-show="form.$submitted || form.dob.$touched"><div class="assertive"ng-show="form.dob.$error.required">Masukkan Tanggal Lahir Anda.</div></div></label><!--Email--><label class="item item-input item-stacked-label"><span class="input-label">Email<span style="color:red">*</span></span><input type="email"ng-model="registerData.email"placeholder="username@domain.tld"name="email"required><div ng-show="form.$submitted || form.email.$touched"><div class="assertive"ng-show="form.email.$error.required">Mohon isi alamat Email Anda.</div><div class="assertive"ng-show="form.email.$error.email">Mohon isi alamat Email Anda yang valid.</div></div></label><!--Password--><label class="item item-input item-stacked-label"><span class="input-label">Password<span style="color:red">*</span></span><input type="password"ng-model="registerData.password"placeholder=""name="password"required><div ng-show="form.$submitted || form.password.$touched"><div class="assertive"ng-show="form.password.$error.required">Masukkan password Anda.</div></div></label><!--Password2--><label class="item item-input item-stacked-label"><span class="input-label">Ulangi Password<span style="color:red">*</span></span><input type="password"ng-model="registerData.passwordConfirmation"placeholder=""name="confirmPassword"required><div ng-show="form.$submitted || form.confirmPassword.$touched"><div class="assertive"ng-show="form.confirmPassword.$error.required">Masukkan password Anda lagi.</div></div></label><ion-toggle ng-model="registerData.is_old_patient"toggle-class="toggle-calm"ng-true-value="1"ng-false-value="0"name="old_patient"><span class="settings-item__text">Saya pasien lama<span style="color:red">*</span></span></ion-toggle></div><div class="padding"><button class="button button-block button-calm"ng-click="registerAccount()"type="submit">Daftar</button></div></form></ion-content></ion-modal-view>'),
        t.put("templates/forgot-password.html", '<ion-modal-view id="forgot-password"> <ion-header-bar class="bar bar-calm bar-header"><div class="buttons"> <button class="button button-clear" ng-click="closeForgotPassword()"><i class="icon ion-ios-close-empty"></i> </button></div><h1 class="title">Lupa Password</h1> </ion-header-bar> <ion-content><form id="forgot-password-form" name="form" novalidate><div class="row"><div class="col"><div class="list"><p>Masukkan email Anda, kami akan mengirimkan link untuk mengatur ulang password akun ke email Anda.</p> <label class="item item-input item-stacked-label"><span class="input-label">Email<span style="color:red">*</span></span> <input type="email" ng-model="forgotPasswordData.email" placeholder="username@domain.tld" name="email" required><div ng-show="form.$submitted || form.email.$touched"><div class="assertive" ng-show="form.email.$error.required">Mohon isi alamat Email Anda yang terdaftar.</div><div class="assertive" ng-show="form.email.$error.email">Mohon isi alamat Email Anda yang valid.</div></div> </label></div></div></div><div class="padding"> <button class="button button-block button-calm" ng-click="forgotPassword()" type="submit">Kirim</button></div></form> </ion-content> </ion-modal-view>'),
        t.put("templates/about/index.html", '<ion-view view-title="Tentang Klinik Estetika" id="home"> <ion-content lazy-scroll> <div class="list about"> <div class="item wrap item-text-wrap"> <img class="full-image" image-lazy-src="https://klinikestetika.com/images/about/about_01_new.jpg" image-lazy-loader="dots"> <h1>BEAUTY OUTSIDE HAPPY INSIDE</h1> <p>Kulit yang sehat dan terawat tentu menjadi dambaan semua orang, oleh karena itu dr. M. Affandi Sp.KK(K) mengembangkan layanan dan produk perawatan kulit dengan standar medis untuk membantu mewujudkankeinginan tersebut. Layanan dan produk perawatan yang dikembangkan oleh dr. Mochamad Affandi, Sp.KK(K) tersebut menggunakan formulasi dermatologi terbaik dan disusun secara personal untuk masing-masing pasien.</p><p>Klinik Estetika berawal dari praktek dokter pribadi dr. M.Affandi, Sp.KK(K) sejak tahun 1988 di Jl. Letnan Jendral S. Parman No. 16 A, Semarang. Berawal dari praktek dokter tersebut, dr. M. Affandi, Sp.KK(K) telah melayani berbagai perawatan kulit denganstandar medis yang ketat. Berbekal respon positif dari masyarakat, mendorong beliau untuk memberikan pelayanan yang lebih baik lagi. Oleh karena itu sejak tanggal 6 Maret 1990, praktek dr. M. Affandi, Sp.KK(K) berpindah ketempat yang lebih luas danlebih nyaman di Jl. Kyai Saleh No. 9 Semarang. Mengingat sebagian besar pasien berasal dari luar kota Semarang, Klinik Estetika juga menyediakan fasilitas penginapan bagi pasien-pasiennya.</p><img class="image-content" image-lazy-src="https://klinikestetika.com/images/about/about_02_new.jpg" image-lazy-loader="dots"> <p>Seiring dengan tuntutan perkembangan jaman dan tekad dari kami untuk semakin meningkatkan kualitas pelayanan kepada pasien, maka sejak tahun 2005 kami bertransformasi menjadi Klinik Estetika dr.Affandi, sebuah Klinik Spesialis Kulit yang menerapkan standardermatologi bagi perawatan kulit pasien-pasiennya.</p><p>Selain inovasi di bidang produk perawatan dan jenis layanan untuk pasien, kami juga terus melakukan inovasi dalam bidang teknologi. Dengan tersedianya website e-commerce Klinik Estetika dr.Affandi maka pasien yang tidak dapat berkunjung secara langsungke Klinik Estetika tetap dapat melakukan konsultasi dengan tim dokter. Pasien yang sudah terdaftar juga bisa melakukan pemesanan produk perawatan melalui website.</p><p>Klinik Estetika dr.Affandi merupakan klinik kecantikan pertama yang menyediakan layanan konsultasi online secara live. Kami menyediakan dua macam layanan konsultasi online yaitu photo consultation dan live video consultation.</p><p>Klinik Estetika dr.Affandi juga merupakan klinik kecantikan pertama yang menyediakan layanan e-commerce bagi pasien-pasiennya. Kami memberikan kemudahan untuk para pasien yang ingin melakukan pemesanan krim tetapi tidak dapat datang ke Klinik Estetika.Kami juga menyediakan 5 (lima) metode pembayaran yang akan memudahkan pasien dalam menyelesaikan pemesanan.</p><p>Dengan makin berkembangnya teknologi kini smartphone menjadi salah satu alat yang dimiliki oleh hampir setiap individu. Dengan ini Klinik Estetika dr.Affandi meluncurkan Mobile Apps yang akan semakin memudahkan pasien yang ingin melakukan konsultasi secaraonline (melalui photo consultation dan live video consultation) atau ingin melakukan pemesanan produk perawatan. Keberadaan mobile apps ini juga menempatkan Klinik Estetika dr.Affandi sebagai klinik kecantikan pertama yang menyediakan layanan melaluiaplikasi mobile.</p><p>Kami juga memahami mobilitas pasien yang cukup tinggi, dimana dalam satu hari bisa saja pasien berada di 2 kota yang berbeda dan berkunjung ke Klinik Estetika yang berbeda. Untuk itu kami mengembangkan sistem data base pasien “online real time” di seluruhcabang Klinik Estetika. Jadi, bukan menjadi masalah bila pasien berkunjung ke 2 Klinik Estetika yang berbeda dalam satu hari karena data pasien akan selalu update / terbarukan.</p><p>Dengan menerapkan standar profesionalisme yang tinggi dan standar medis yang ketat, maka sudah menjadi komitmen kami untuk memberikan pelayanan yang terbaik bagi seluruh pasien Klinik Estetika karena kesehatan, keindahan dan kecantikan adalah harta takternilai.</p><p>Klinik Estetika dr.Affandi berhasil membuktikan pencapaiannya dengan meraih penghargaan yang diselenggarakan oleh Majalah SWA dalam bidang Indonesia Healthcare Most Reputable Brand dua tahun berturut-turut yaitu pada tahun 2014 dan pada tahun 2015. Penghargaanini diterima oleh dr. Hengky Nur Hidayat selaku CEO Klinik Estetika dr.Affandi.</p><h2>Vision 2018</h2> <p><em>To become the most admired skin-care company in Indonesia in delivering happiness experience</em></p><h2>Mission</h2> <ul class="list-text"> <li>To provide innovative products and its related services for mainstream urban market focus on product leadership and customer intimacy.</li><li>To preserve legacy market by providing consistent customer intimacy focus on operational excellence</li><li>To develop budget skin-care product and service focus on affordable yet relevant offerings to sub-urban markets</li></ul> <h2>Company Values</h2> <p><strong>HONEST (JUJUR)</strong><br/> The adjective Honest is perfect for describing someone who tells the truth. If you\'re always honest, it means you\'re truthful and sincere no matter what</p><p><strong>DISCIPLINE (DISIPLIN)</strong><br/> The noun Discipline is a system of rules of conduct or method of practice / or training to improve strength or self-control / or the trait of being well behaved. When you have discipline, you have self-control.When you discipline staff, you are either teaching them to be well-behaved, or you are punishing and correcting them. Discipline must start from ourselves.</p><p><strong> RESPONSIBLE (BERTANGGUNG JAWAB)</strong><br/> The adjective Responsible is worthy of or requiring responsibility or trust; or held accountable. When you are a Responsible person, you will always doing things thoroughly, with effort to achievethe maximum results.</p><p><strong>TEAMWORK (KERJASAMA TIM)</strong><br/> The noun Teamwork is cooperative work done by a team. Each person plays their part to help achieve a larger goal. Often people refer to teamwork as a skill. When you work well in teams, you have greatteamwork skills.</p><p><strong>FOCUS ON CUSTOMERS (FOKUS PADA PELANGGAN)</strong><br/> Focus on customers can be noun or adjective, depend on sentences. Focus is all about finding a center, or the concentration of attention or energy on something. Something here meansOUR CUSTOMER, as The Most Valuable asset of Klinik Estetika dr. Affandi, Instead of it\'s employee and all the legacy, which is the things inherited from the founder of the company.</p><p><strong>SERVICE EXCELLENCE (KUALITAS PELAYANAN SEMPURNA)</strong><br/> The noun Service Excellence is the total maximum satisfaction performance of duties by our company member, refer to front end staff or back office management, standard of excellentservice to our external or internal customers. Something excellent is very good, great, or highest quality: this is one of the best compliments around. This is a strong word used mainly for things, people, and actions that are much better than average,that\'s why we put this as one of our Company Value.</p></div></div></ion-content></ion-view>'), 
        t.put("templates/articles/detail.html", '<ion-view view-title="{{data.title}}" id="article"><ion-content lazy-scroll><ion-refresher pulling-text="Pull to refresh..."on-refresh="refreshDetailArticle()"></ion-refresher><!--Start Post Content--><div class="begin-post article"><!--Thumbnail Image--><div class="thumbnail-article"><img class="full-image"ng-show="isContainImage"image-lazy-src="{{data.image}}"image-lazy-loader="dots"></div><!--Title Article--><div class="title-article"><b>{{data.title}}</b></div><div style="padding:0px 10px;"><!--Meta Content--><div class="meta-article"><span><i class="icon ion-calendar"></i>&nbsp;{{date}}</span>&nbsp;&nbsp;&nbsp;<span><i class="icon ion-ios-pricetag"></i>&nbsp;{{data.name}}</span></div><!--Content--><div class="content-article"><div ng-bind-html="hrefToJS(content)"></div></div></div></div></ion-content></ion-view>'), 
        t.put("templates/articles/index.html", '<ion-view view-title="Artikel" id="article"><div class="bar bar-subheader item-input-inset"><label class="item-input-wrapper item-select"><div class="input-label">Kategori</div><select ng-model="category" ng-options="a.id as (a.name + \' (\' + a.total_posts + \')\') for a in categories" ng-change="categoryChange(category)"></select></label></div><ion-content class="pd-t-40" lazy-scroll><ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshArticle()"></ion-refresher><div class="row articles-content responsive-md responsive-sm"><div class="begin-post article col col-25" ng-repeat="article in articles track by article.id" ui-sref="app.article_detail({article_id: article.id, article_date: article.updated_at})"><div class="thumbnail-article"><img class="full-image"ng-show="article.isContainImage"image-lazy-src="{{article.image}}"image-lazy-loader="dots"></div><div><div class="title-headline-article"><b>{{article.title}}</b></div><!--Meta Content--><div class="meta-article"><span><i class="icon ion-calendar"></i>&nbsp;{{article.updated_at}}</span>&nbsp;&nbsp;&nbsp;<span><i class="icon ion-ios-pricetag"></i>&nbsp;{{article.name}}</span></div><!--Excerpt Content--><div ng-bind-html="article.content">...</div></div></div></div><!--</div>--><!--infinite scroll--><ion-infinite-scroll ng-if="!theEnd"on-infinite="loadMore()"distance="1%"></ion-infinite-scroll></ion-content></ion-view>'), 
        t.put("templates/branches/detail.html", '<ion-view id="branches" view-title="{{ branch.name }}"> <ion-content><div class="padding"><p>{{ branch.address }}</p><a class="button button-block button-light" ng-click="showMaps(branch)"><i class="icon ion-ios-location"></i> See on Map</a> <a href="#" class="button button-block button-positive" ng-click="callNumber(branch.phone)"><i class="icon ion-ios-telephone"></i> {{ branch.phone }}</a></div> <ion-gallery ion-gallery-items="branch_images"></ion-gallery> </ion-content> </ion-view>'), 
        t.put("templates/branches/index.html", '<ion-view id="branches" view-title="Cabang Klinik Estetika"> <ion-content><div class="row responsive-md branches-content" style="-webkit-box-align: end;align-items: flex-end;"><div class="list card col col-25" ng-repeat="branch in branches" ui-sref="app.branchDetail({branch_id: branch.id})"><div class="item item-text-wrap"><h2>{{ branch.name }}</h2><p>{{ branch.address }}</p></div> <a href="#" class="item item-divider item-icon-left positive" ng-click="callNumber($event, branch.phone)"><i class="icon ion-ios-telephone"></i> {{ branch.phone }}</a></div></div> </ion-content> </ion-view>'), 
        t.put("templates/contact-us/index.html", '<ion-view cache-view="false" view-title="Hubungi Kami"> <ion-content><div class="row responsive-md"><div class="col"><p>Apabila Anda mempunyai pertanyaan seputar produk maupun pelayanan Estetika dr. Affandi, silahkan lengkapi form di bawah ini untuk kami balas secepatnya.</p></div></div><form id="contact-us-form" name="cuform" novalidate> <ion-list> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Nama Lengkap</strong> <span class="assertive">*</span></span> <input type="text" ng-model="contactUsData.name" name="fullName" placeholder="Isi Nama Lengkap Anda" required=""><div ng-show="cuform.$submitted || cuform.fullName.$touched"><div class="assertive" ng-show="cuform.fullName.$error.required">Mohon isi Nama Lengkap Anda.</div></div> </label> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Email</strong> <span style="color:red">*</span></span> <input type="email" ng-model="contactUsData.email" name="email" placeholder="Isi email Anda yang valid" required><div ng-show="cuform.$submitted || cuform.email.$touched"><div class="assertive" ng-show="cuform.email.$error.required">Mohon isi alamat Email Anda.</div><div class="assertive" ng-show="cuform.email.$error.email">Mohon isi alamat Email Anda yang valid.</div></div> </label> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Judul</strong> <span class="assertive">*</span></span> <input type="text" ng-model="contactUsData.subject" name="subject" placeholder="Isi Judul pesan Anda" required=""><div ng-show="cuform.$submitted || cuform.subject.$touched"><div class="assertive" ng-show="cuform.subject.$error.required">Mohon isi Judul pesan Anda.</div></div> </label> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Pesan</strong> <span class="assertive">*</span></span><textarea msd-elastic="" ng-model="contactUsData.message" name="message" ng-minlength="50" placeholder="Pesan harus minimal 50 karakter" required=""></textarea><div ng-show="cuform.$submitted || cuform.message.$touched"><div class="assertive" ng-show="cuform.message.$error.required">Mohon isi pesan Anda.</div><div class="assertive" ng-show="cuform.message.$error.minlength">Pesan Anda harus minimal mengandung 50 karakter.</div></div> </label> </ion-list><div class="row"> <button type="submit" ng-click="submitMessage()" class="button button-block button-calm"><strong>Submit</strong></button></div></form> </ion-content> </ion-view>'), 
        t.put("templates/modal/confirmation_vote.html", '<ion-modal-view id="confirmation"> <ion-header-bar><div class="buttons"> <button class="button button-clear" ng-click="closeConfirmation()"> <i class="icon ion-ios-close-empty"></i></button><h1 class="title">KONFIRMASI</h1></div> </ion-header-bar> <ion-content><form ng-submit="doLogin()"><div class="list"> <label class="item item-input item-floating-label"> <span class="input-label">Email</span> <input type="text" ng-model="loginData.email" placeholder="Email"> </label> <label class="item item-input item-floating-label"> <span class="input-label">Password</span> <input type="password" ng-model="loginData.password" placeholder="Password"> </label></div><div class="padding"> <button class="button button-outline button-block button-positive" type="submit">Log in</button></div></form><div style="text-align:center"> Belum punya akun? <a class="positive" ng-href="#" ng-click="register()">Daftar di sini</a></div> </ion-content> </ion-modal-view>'), 
        t.put("templates/orders/detail.html", '<ion-view view-title="Detail Pesanan" id="orders"> <ion-content> <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshDetailOrder()"></ion-refresher><div class="orders-detail padding"><div class="orders-detail-start margin-50"><h4>Informasi Pengiriman</h4><table class="striped"><tr><td>Faktur</td><td>#{{data.order_no}}</td></tr><tr><td>Status</td><td>{{data.status}}</td></tr><tr><td>Alamat Pengiriman</td><td>{{data.shipping_address}}, {{data.city_name}}, {{data.province_name}} {{data.shipping_postal_code}}</td></tr><tr><td>Tanggal</td><td>{{data.created_at}}</td></tr></table></div><div class=""><h4>Informasi Produk</h4><div class="list"><div class="item item-avatar" ng-repeat="product in products"> <img src="{{product.image}}"><h2 style="white-space:normal"><b>{{product.title}}</b></h2><p class="subdued">{{product.qty}} buah</p><p class="subdued">{{product.price}}/buah</p><h2 class="subdued pull-right"><b>{{product.totalPrice}}</b></h2></div></div></div><table class="striped"><tr><td>Berat</td><td><span class="pull-right">{{data.total_weight}} Kg</span></td></tr><tr><td>Sub Total</td><td>Rp <span class="pull-right">{{data.subtotal}}</span></td></tr><tr><td>Biaya Pengiriman</td><td>Rp <span class="pull-right">{{data.shipping_price}}</span></td></tr><tr style="font-weight:bold"><td>Total</td><td>Rp <span class="pull-right">{{data.total_price}}</span></td></tr></table></div> </ion-content><div ng-show="data.status == \'MENUNGGU PEMBAYARAN\'" class="bar bar-footer"> <button class="button button-balanced button-block" ui-sref="app.orders_payment({\'token\': data.random_token})"><div class="title">Bayar Sekarang</div></button></div> </ion-view>'), 
        t.put("templates/orders/index.html", '<ion-view view-title="Pesanan Saya" id="orders">  <ion-content>   <ion-refresher    pulling-text="Pull to refresh..."    on-refresh="refreshOrders()">  </ion-refresher><!-- fetching rows is null --><div class="padding" ng-if="total == 0 && is_loading == 0"><div class="panel-assertive"><h5>Halo {{full_name}}, Anda belum memulai apapun. Silakan mulai berbelanja dengan menekan tombol dibawah ini</h5><div class="button button-small button-block button-positive" href="#/app.product">Belanja</div></div></div><ion-list class="orders-order">  <ion-item ng-repeat="order in orders" ui-sref="app.orders_detail({\'order_no\':\'{{order.order_no}}\'})"><div class="row orders-item"><div class="col col-75"><h2>#{{order.order_no}}</h2><p><i class="ion-ios-calendar"></i> {{order.created_at}}</p><p class="text-assertive" ng-if="order.status == \'DIBATALKAN\'">{{order.status}}</p><p class="text-energized" ng-if="order.status == \'BELUM DITERIMA\'">{{order.status}}</p><p class="text-balanced" ng-if="order.status == \'MENUNGGU PEMBAYARAN\'">{{order.status}}</p></div><div class="col"><div class="price"><b>{{order.total_price}}</b></div></div><i class="ion-ios-arrow-right arrow"></i></div></div></ion-item></ion-list><ion-infinite-scroll ng-if="!theEnd" on-infinite="loadMore()" distance="1%">  </ion-infinite-scroll>  </ion-content></ion-view>'), 
        t.put("templates/orders/payment.html", '<ion-view view-title="Pembayaran" id="orders"> <ion-content id="orders-content"><div class="card"><div ng-click="openDokuModal()" class="item item-text-wrap"><h2>Doku</h2><p> <img src="https://klinikestetika.com/images/logo-doku.png"></p><p>Untuk pembayaran menggunakan kartu kredit, bank transfer, minimarket, atau Doku Wallet.</p></div></div><div class="card"><a ng-click="openClickpayModal()" class="item item-text-wrap"><h2>My ShortCart</h2><p><img src="https://klinikestetika.com/images/msc-logo.png"></p><p><p>untuk pembayaran menggunakan Payment with Doku Wallet.</p></a></div> </ion-content> </ion-view>'), 
        t.put("templates/payments/bca-clickpay.html", '<ion-modal-view> <ion-header-bar class="bar bar-calm"><div class="buttons"> <button class="button button-clear" ng-click="closeClickpayModal()"> <i class="icon ion-ios-close-empty"></i> </button></div><h1 class="title">Payment with BCA KlikPay</h1> </ion-header-bar> <ion-content id="bca-clickpay-content"><div ng-style="iframeWrapperStyle"> <iframe ng-src="{{shortcartUrl}}" frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div> </ion-content> </ion-modal-view>'), 
        t.put("templates/payments/doku.html", '<ion-modal-view> <ion-header-bar class="bar bar-calm"><div class="buttons"> <button class="button button-clear" ng-click="closeDokuModal()"> <i class="icon ion-ios-close-empty"></i></button></div><h1 class="title">Payment with Doku</h1> </ion-header-bar> <ion-content id="doku-content"><div ng-style="iframeWrapperStyle"> <iframe ng-src="{{dokuUrl}}" frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div> </ion-content> </ion-modal-view>'), 
        t.put("templates/photos/consultation_page1.html", '<ion-view cache-view="false" view-title="Konsultasi" ng-controller="consultation_page1"> <ion-content><form id="photo-consult-form" name="photoform" novalidate> <ion-list> <ion-item class="item-divider"> Apa jenis kulit Anda? <span class="assertive">*</span> <span ng-show="photoform.$submitted && photoform.jenisKulit.$error.required" class="assertive">(harap diisi)</span> </ion-item> <ion-radio name="jenisKulit" ng-model="consultation.jenisKulit" ng-repeat="item in jenisKulit" ng-value="\'{{item}}\'" ng-required="true">{{item}} </ion-radio> <br /> <ion-toggle toggle-class="toggle-calm" ng-model="consultation.jerawat" ng-true-value="\'{{jerawat[0]}}\'" ng-false-value="\'{{jerawat[1]}}\'" ng-checked="false" required>Ada jerawat di wajah </ion-toggle> <ion-toggle toggle-class="toggle-calm" ng-model="consultation.flek" ng-true-value="\'{{flek[0]}}\'" ng-false-value="\'{{flek[1]}}\'" ng-checked="false" required>Ada flek hitam/coklat </ion-toggle> <ion-toggle toggle-class="toggle-calm" ng-model="consultation.riwayatPenyakit" ng-true-value="\'{{riwayatPenyakit[0]}}\'" ng-false-value="\'{{riwayatPenyakit[1]}}\'" ng-checked="false" required>Ada riwayat sakit maag </ion-toggle> <ion-toggle toggle-class="toggle-calm" ng-model="consultation.alergiObatOles" ng-true-value="\'{{alergiObatOles[0]}}\'" ng-false-value="\'{{alergiObatOles[1]}}\'" ng-change="checkChoice(consultation.alergiObatOles)" ng-checked="false" required>Alergi obat oles kulit</ion-toggle><div ng-show="checkChoice(consultation.alergiObatOles)"> <ion-item class="item-divider">Jenis obat oles <span ng-show="photoform.isiAlergiObatOles.$error.required && checkChoice(consultation.alergiObatOles)" class="assertive">(harap diisi)</span></ion-item> <ion-input class="item item-input item-floating-label"><textarea name="isiAlergiObatOles" type="text" ng-model="consultation.isiAlergiObatOles" ng-required="checkChoice(consultation.alergiObatOles)"></textarea></ion-input> <br /></div> <ion-toggle toggle-class="toggle-calm" ng-model="consultation.alergiObatCair" ng-true-value="\'{{alergiObatCair[0]}}\'" ng-false-value="\'{{alergiObatCair[1]}}\'" ng-change="checkChoice(consultation.alergiObatCair)" ng-checked="false" required>Alergi obat cair </ion-toggle><div ng-show="checkChoice(consultation.alergiObatCair)"> <ion-item class="item-divider">Jenis obat cair <span ng-show="photoform.isiAlergiObatCair.$error.required && checkChoice(consultation.alergiObatCair)" class="assertive">(harap diisi)</span> </ion-item> <ion-input class="item item-input item-floating-label"><textarea name="isiAlergiObatCair" type="text" ng-model="consultation.isiAlergiObatCair" ng-required="checkChoice(consultation.alergiObatCair)"></textarea></ion-input> <br /></div><div ng-show="jenKel == \'P\'"> <br ng-hide="checkChoice(consultation.alergiObatCair)" /> <ion-item class="item-divider">Status kehamilan dan menstruasi <span class="assertive">*</span> <span ng-show="photoform.$submitted && photoform.khususwanita.$error.required && jenKel == \'P\'" class="assertive">(harap diisi)</span></ion-item> <ion-radio name="khususwanita" ng-model="consultation.khususWanita" ng-repeat="item in khususWanita" ng-value="\'{{item}}\'" ng-required="jenKel == \'P\'">{{item}}</ion-radio> <br /></div> <ion-item class="item-divider">Tuliskan keluhan Anda di sini</ion-item> <ion-input class="item item-input item-floating-label"><textarea type="text" ng-model="consultation.keluhan" placeholder="contoh: jerawat dimana-mana"></textarea></ion-input> <br /></ion-list><div class="row button-consult"> <button type="submit" class="button button-block button-balanced" ng-click="confirmation()"> Next <i class="icon ion-arrow-right-c"></i></button></div></form> </ion-content> </ion-view>'),
        t.put("templates/photos/consultation_page2.html", '<ion-view cache-view="false" view-title="Foto" ng-controller="consultation_page2"> <ion-content><div class="card"><div class="item item-icon-left item-text-wrap calm-bg light "><i class="icon ion-ios-information-outline"></i> Klik icon untuk mengunggah foto</div></div><div class="list"><div class="item"> Foto Wajah Tampak Depan <span class="assertive">*</span></div><div class="item item-text-wrap" style="border-top:none;padding-top:0"><div class="row responsive-sm"><div class="col"> <img id="consultationPicture1" class="full-image" ng-src="images/user-default.png" ng-click="getConsultationPicture(1)"></div></div></div><div class="item"> Foto Wajah Tampak Kiri <span class="assertive">*</span></div><div class="item item-text-wrap" style="border-top:none;padding-top:0"><div class="row responsive-sm"><div class="col"> <img class="full-image" id="consultationPicture2" ng-src="images/user-default.png" ng-click="getConsultationPicture(2)"></div></div></div><div class="item"> Foto Wajah Tampak Kanan <span class="assertive">*</span></div><div class="item item-text-wrap" style="border-top:none;padding-top:0"><div class="row responsive-sm"><div class="col"> <img class="full-image" id="consultationPicture3" ng-src="images/user-default.png" ng-click="getConsultationPicture(3)"></div></div></div><div class="item"> Foto Keluhan Lain (Jika Ada)</div><div class="item item-text-wrap" style="border-top:none;padding-top:0"><div class="row responsive-sm"><div class="col"> <img class="full-image" id="consultationPicture4" ng-src="images/user-default.png" ng-click="getConsultationPicture(4)"></div></div></div><div class="row"> <button class="button button-block button-positive" ng-click="finishConsultation()">Selesai</button></div></div> </ion-content> </ion-view>'), 
        t.put("templates/photos/detail.html", '<ion-view view-title="Histori Konsultasi"> <ion-content> <ion-list> <label class="item item-input" ng-hide="photoDetails.skin_type == \'\'"> <span class="input-label">Jenis kulit</span> <input type="text" ng-disabled="true" value="{{photoDetails.skin_type}}"></label> <ion-toggle toggle-class="toggle-calm" ng-model="photoDetails.has_acne" ng-true-value="1" ng-false-value="0" ng-disabled="true">Ada jerawat di wajah</ion-toggle> <ion-toggle toggle-class="toggle-calm" ng-model="photoDetails.has_black_spots" ng-true-value="1" ng-false-value="0" ng-disabled="true">Ada flek hitam/coklat</ion-toggle> <ion-toggle toggle-class="toggle-calm" ng-model="photoDetails.is_gastritis" ng-true-value="1" ng-false-value="0" ng-disabled="true">Ada riwayat sakit maag</ion-toggle> <ion-toggle toggle-class="toggle-calm" ng-model="photoDetails.is_topical_drug_allergy" ng-true-value="1" ng-false-value="0" ng-disabled="true">Alergi obat oles kulit</ion-toggle> <ion-toggle toggle-class="toggle-calm" ng-model="photoDetails.is_oral_drug_allergy" ng-true-value="1" ng-false-value="0" ng-disabled="true">Alergi obat cair</ion-toggle> <label class="item item-input" ng-hide="photoDetails.menstrual_cycle == \'\'"> <span class="input-label">Siklus menstruasi</span> <input type="text" ng-disabled="true" value="{{photoDetails.menstrual_cycle}}"></label> </ion-list><div class="card" ng-show="photoDetails.complaint"><div class="item"> Komplain</div><div class="item item-text-wrap" style="border: none"><p>{{photoDetails.complaint}}</p></div></div><div class="list card" ng-repeat="image in photoDetails.consultation_images" ng-show="image.image"><div class="item">{{image.image_type.replace(\'_\', \' \').toUpperCase()}}</div><div class="item item-image"> <img ng-src="https://klinikestetika.com/{{image.image}}" style="width:100%" /></div></div> </ion-content> </ion-view>'), 
        t.put("templates/photos/index.html", '<ion-view cache-view="false" view-title="Konsultasi Foto" id="consultation"> <ion-content lazy-scroll><div class="list mg-b-0" ng-if="!consultationData" ng-repeat="consultation in consultations"><div class="item item-text-wrap ng-class:{\'item-thumbnail-left\': consultation.image, \'item-button-right\': consultation.status == \'Tersedia\'}" ng-if="consultation.type == \'photo\'" ui-sref="app.photo_detail({id:consultation.id})"> <img ng-show="consultation.image" image-lazy-src="{{consultation.image}}" image-lazy-loader="dots"><h2>{{consultation.status}}</h2><p>{{consultation.updated_at}}</p><p style="text-transform:capitalize">{{consultation.type}} consultation</p> <button ng-if="consultation.status == \'Tersedia\'" ng-click="buyPrescription($event,consultation.id)" class="button button-calm button-stable"> Beli</button></div><div class="item item-text-wrap ng-class:{\'item-button-right\': consultation.status == \'Tersedia\'}" ng-if="consultation.type == \'video\'"><h2 style="text-transform:capitalize">{{consultation.status}}</h2><p>{{consultation.updated_at}}</p><p style="text-style=" width: 100%; "capitalize">{{consultation.type}} consultation</p><div style="clear:both"></div> <button ng-if="consultation.status == \'Tersedia\'" ng-click="buyPrescription($event,consultation.id)" class="button button-calm button-stable"> Beli</button></div></div><div ng-if="consultationData"></div> </ion-content><div class="bar bar-footer"> <button class="button button-balanced button-block" ui-sref="app.photo_consultation_page_1"> <i class="icon ion-plus-circled"></i> Konsultasi</button></div> </ion-view>'), 
        t.put("templates/photos/page1_confirmation.html", '<ion-modal-view id="login"> <ion-header-bar class="bar bar-calm"><div class="buttons"> <button class="button button-clear" ng-click="closeConfirmation()"> <i class="icon ion-ios-close-empty"></i></button><h1 class="title">Konfirmasi</h1></div></ion-header-bar> <ion-content><form ng-submit="CheckPilihan()"><div class="list"><p>Apakah Anda Yakin?</p></div><div class="padding"> <button class="button button-outline-black button-block" type="submit">Ya</button></div><div class="padding"> <a class="button button-outline-black button-block" ng-click="closeConfirmation()">Tidak</a></div></form> </ion-content> </ion-modal-view>'), 
        t.put("templates/photos/question-consultation.html", '<script>angular.module(\'starter\',[\'ionic\',\'ionic-modal-select\']).controller(\'MainCtrl\',[\'$scope\',function($scope){$scope.selectables=[1,2,3];</script> <div id="consultation" ng-app="starter" ng-controller="MainCtrl"><div class="card"><div class="item item-divider" modal-select="" ng-model="someModel" options="selectables" modal-title="Select a number">Apa jenis kulit Anda ?</div><div class="option"> {{option}}</div><div class="item item-text-wrap">Jawaban: {{someModel}}</div></div></div>'), 
        t.put("templates/products/detail.html", '<ion-view view-title="{{data.title | limitTo:30 }}" id="product-details"> <ion-content> <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshDetailProduct()"></ion-refresher><div class="begin-post product"><div class="thumbnail"> <img class="full-image" ng-src="https://klinikestetika.com{{data.image}}" alt="{{data.title}}"><div class="shade"></div><div class="title-product"><h2>{{ data.title }}</h2></div></div><div ng-show="data.is_otc == 0" class="card"><div class="item item-icon-left item-text-wrap assertive-bg light"> <i class="icon ion-alert-circled"></i> Pembelian produk ini menggunakan resep dokter.</div></div><div class="card"><div class="item item-icon-left"> <i class="icon ion-information-circled"></i><strong>Fungsi</strong></div><div class="item item-text-wrap no-border"><p>{{data.Fungsi}}</p></div></div><div class="card" ng-show="data.CaraPakai"><div class="item item-icon-left"> <i class="icon ion-clipboard"></i> <strong>Cara Pakai</strong></div><div class="item item-text-wrap no-border"><p>{{data.CaraPakai}}</p></div></div><div class="pricing"><div class="row"><div class="col">Ukuran</div><div class="col">Netto</div><div class="col">Harga</div></div><div class="row"><div class="col">{{data.prices1size}}</div><div class="col">{{data.prices1netto}}</div><div class="col"><strong>{{data.prices1price}}</strong></div></div><div ng-if="data.prices2size" class="row"><div class="col">{{data.prices2size}}</div><div class="col">{{data.prices2netto}}</div><div class="col"><strong>{{data.prices2price}}</strong></div></div></div></div> </ion-content><div class="bar bar-footer"> <button ng-click="addNewCartItem(data.id)" class="button button-block button-calm buy-button"><div class="title">Beli Sekarang</div></button></div> </ion-view>'), 
        t.put("templates/products/index.html", '<ion-view view-title="Produk" id="products"><ion-nav-buttons side="right"><button class="button button-icon icon ion-ios-search-strong"ng-click="showFilterBar()"></button></ion-nav-buttons><div class="bar bar-subheader item-input-inset"ng-hide="states.searched"><label class="item-input-wrapper item-select"><div class="input-label">Kategori</div><select ng-model="category"ng-options="a.id as (a.name + \' (\' + a.total_posts + \')\') for a in categories"ng-change="categoryChange(category)"></select></label></div><ion-content class="product-list"ng-class="{\'pd-t-40\': !states.searched}"lazy-scroll><ion-refresher pulling-text="Pull to refresh..."on-refresh="refreshProduct()"></ion-refresher><div class="row"><div class="product-card"><a class="product-link" href="#/app/product/detail/{{product.id}}" ng-repeat="product in products track by product.id"><img ng-if="product.is_otc == 0"ng-src="images/ribon.png"alt="{{ product.title }}"class="ribbon"><img class="product-image-thumb"image-lazy-src="https://klinikestetika.com/{{product.image}}"image-lazy-loader="dots"><div class="meta-product"><strong>{{product.title}}</strong></div></a></div></div><div ng-if="(!products.length && states.searched) || loading"class="no-results"><p class="mg-t-40 text-center">No Results for<strong>{{filterText}}</strong></p></div><ion-infinite-scroll ng-if="!theEnd"on-infinite="loadMore()"distance="1%"></ion-infinite-scroll></ion-content></ion-view>'), 
        t.put("templates/services/index.html", '<ion-view view-title="Service" id="service"><ion-pane><ion-tabs class="tabs-positive tabs-estetika tabs-top"><ion-tab title="Kulit"><ion-content lazy-scroll><div class="row responsive-md services-content"><div class="list spa-post col col-33" ng-repeat="kulit in kulits" ui-sref="app.serviceKulitDetail({\'service_id\':\'{{kulit.id}}\'})" ng-hide="kulit.description == \'\'"><img class="service-image" image-lazy-src="https://klinikestetika.com/{{kulit.image}}" ng-hide="kulit.image == \'\'" image-lazy-loader="dots"><div class="service-body"><h2 class="title">{{kulit.name}}</h2><span ng-bind-html="kulit.description | limitTo:300" ng-hide="kulit.description == \'\'"></span><span ng-if="kulit.description.length > 300">...</span></div></div></div><ion-infinite-scroll ng-if="!theEnd"on-infinite="loadMore()" distance="1%"></ion-infinite-scroll></ion-content></ion-tab><ion-tab title="SPA"><ion-content><div class="row responsive-md services-content"><div class="list spa-post col col-33" ng-repeat="spa in spas" ui-sref="app.serviceSpaDetail({\'service_id\':\'{{spa.id}}\'})"><img class="service-image" image-lazy-src="https://klinikestetika.com/{{spa.image}}" image-lazy-loader="dots"><div class="service-body"><h2 class="title">{{spa.name}}</h2><p ng-bind-html="spa.description | limitTo:300" style="white-space:normal">...</p></div></div></div><ion-infinite-scroll ng-if="!theEnd" on-infinite="loadMore()" distance="1%"></ion-infinite-scroll></ion-content></ion-tab></ion-pane></ion-tabs></ion-view>'), 
        t.put("templates/terms/index.html", '<ion-view view-title="Syarat dan Ketentuan"> <ion-content id="terms"> <ion-list> <ion-item class="item-text-wrap"><h2>Syarat &amp; Ketentuan</h2><p>Sebelum mengakses situs/platform ini Anda diwajibkan untuk membaca <strong>SYARAT &amp; KETENTUAN</strong> di bawah ini:</p><ol class="list-text"><li> Dengan mengakses dan menggunakan semua fitur layanan yang ada di situs ini, Anda dengan otomatis telah menyetujui semua bentuk syarat &amp; ketentuan yang telah ditentukan oleh Klinik Estetika dr. Affandi.</li><li> Semua akses yang menggunakan password bersifat rahasia dan dilindungi/terlindungi hanya untuk pemilik akun. Di luar pemilik akun tidak diizinkan untuk memperoleh/berusaha memperoleh akses ini secara illegal/tidak sah ke dalam situs ini, termasuk area informasi lain yang bersifat pribadi, rahasia dan dilindungi dengan cara apapun tanpa izin khusus yang telah diberikan resmi dari pihak yang berkepentingan. Segala bentuk pelanggaran akan dikenakan sanksi/hukuman sesuai dengan peraturan &amp; undang-undang yang berlaku di Indonesia.</li><li> Situs ini dikhususkan bagi orang dewasa. Bagi Anda yang masih di bawah umur diwajibkan untuk memiliki izin/persetujuan dari orang tua/wali yang dapat bertanggungjawab atas tindakan Anda, bertanggungjawab atas biaya yang terkait dengan pembelian produk dan layanan dan penerimaan dan pemahaman mengenai Syarat &amp; Ketentuan yang tertera. Tanpa persetujuan/perizinan tersebut, semua hal yang dilakukan oleh pihak terkait di luar tanggung jawab Klinik Estetika dr. Affandi.</li><li> Penggunaan Situs dan Layanan: </br> Anda setuju untuk mematuhi setiap ketentuan, pemberitahuan, kebijakan dan instruksi yang terkait dengan penggunaan layanan dan/atau akses ke situs ini sesuai dengan ketentuan Klinik Estetika dr. Affandi, walau tanpa pemberitahuan lebih lanjut.</li><li> Anda dilarang keras untuk:<ol class="list-text-alpha"><li> Memalsukan identitas, memberikan keterangan palsu dan mengakui sebagai orang lain, atau apapun yang bersifat pelanggaran terhadap identitas.</li><li> Menggunakan situs ini untuk tujuan yang illegal/melanggar hukum dan undang-undang yang berlaku di Indonesia.</li><li> Berusaha mendapatkan akses secara paksa termasuk mengganggu dan/atau mengacaukan sistem komputer atau jaringan yang berhubungan dengan situs/platform dan layanan ini.</li><li> Mem-posting, mempromosikan atau mengirimkan materi/konten terlarang melalui situs/dengan mengatasnamakan Klinik Estetika dr. Affandi tanpa sepengetahuan pihak terkait.</li><li> Menggunakan, mengunggah, memasukkan perangkat lunak/material yang dicurigai mengandung virus, komponen yang bersifat destruktif, kode berbahaya atau apapun yang serupa yang dapat merusak data dan situs atau mengganggu akses komputer dan/atau jaringan pelanggan.</li></ol></li><li> Ketersediaan situs dan layanan: </br> Klinik Estetika dr. Affandi dapat meningkatkan, memodifikasi, menghentikan sementara, menghentikan penyediaan, menghapus, baik secara keseluruhan atau sebagian dari situs atau layanan, tanpa memberikan alasan &amp; pemberitahuan sebelumnya, dan tidak bertanggungjawab jika peningkatan, modifikasi, suspensi atau penghapusan tersebut mencegah Anda mengakses situs atau bagian dari layanan.</li><li> Pihak Klinik Estetika dr. Affandi mempunyai hak penuh atas situs ini termasuk:<ol class="list-text-alpha"><li> Memantau, menyaring atau mengontrol setiap kegiatan, isi atau materi pada situs dan/atau melalui Layanan. Hal tersebut termasuk/berarti, kami dapat menyelidiki setiap pelanggaran terhadap syarat dan ketentuan yang tercantum di sini dan dapat mengambil tindakan apapun yang dianggap sesuai atau tepat;</li><li> mencegah atau membatasi akses pelanggan untuk keperluan yang kami anggap melebihi kapasitas;</li><li> melaporkan kegiatan yang dicurigai sebagai pelanggaran terhadap hukum yang berlaku, undang-undang atau peraturan kepada pihak yang berwenang serta bekerjasama dengan pihak berwenang tersebut; dan/atau</li><li> meminta informasi dan data dari Anda sehubungan dengan penggunaan Layanan dan/atau akses situs setiap saat, dan sebagai pelaksanaan hak Klinik Estetika dr. Affandi jika Anda menolak untuk memberikan/mengungkapkan informasi/data tersebut, atau jika Anda memberikan informasi tidak akurat, menyesatkan, penipuan data dan/atau informasi, atau jika kami memiliki alasan yang cukup mencurigai Anda telah menyediakan informasi tidak akurat, menyesatkan atau penipuan data dan/atau informasi.</li></ol></li><li> Dengan ini Anda telah menyetujui untuk memberikan izin untuk dapat menggunakan informasi yang telah kami terima termasuk tapi tidak terbatas pada, pertanyaan, ulasan, komentar, dan saran. Pihak Klinik Estetika dr. Affandi akan mungkin, namun tidak diwajibkan untuk mempublikasikan, menghapus atau mengubah informasi yang telah Anda berikan perihal submisi.</li><li> Anda menyetujui dan mengesahkan untuk setiap informasi yang kami terima dapat dipergunakan untuk keperluan promosi dan pengiriman informasi.</li></ol><hr><h2>Syarat &amp; Ketentuan e-commerce</h2><ol class="list-text"><li> Dengan ini, kami menganggap Anda telah menyetujui setiap syarat yang telah ditentukan yang berkaitan dengan pembelian produk dari Klinik Estetika dr. Affandi.</li><li> Anda menyadari sepenuhnya bahwa produk yang kami jual tidak bersifat permanen, instan ataupun 100% akurat. Kami tetap menyarankan adanya konsultasi apabila ditemukan adanya ketidak-cocokan terhadap produk Klinik Estetika dr. Affandi.</li><li> Anda menyetujui dan menjamin bahwa Anda tidak mengandalkan hanya pada setiap syarat, kententuan, garansi, usaha, bujukan maupun representasi yang belum disetujui oleh pihak konsultan/Dokter dan Anda.</li><li> Kami tidak memberikan jaminan 100% untuk setiap keluhan, masalah, reaksi yang dapat timbul setelah menggunakan produk kami merupakan tanggung jawab pihak kami sepenuhnya. Kami tidak bertanggungjawab atas setiap ketidaksesuaian pelanggan, kelalaian, pemakaian yang tidak wajar, penanganan atau pemakaian yang salah, perawatan yang salah, ketidakcocokkan, pengaruh kimia, kegagalan atau kelalaian Anda dalam menggunakan produk kami. Resiko bisa diminimalisir dengan mengikuti arahan dokter. Untuk memperkecil munculnya efek samping yang tidak diharapkan, maka pasien diminta mengikuti saran dan petunjuk dari Dokter.</li><li> Setiap pembelanjaan yang Anda lakukan harus dilakukan dalam keadaan sadar dan tidak dalam pengaruh apapun.Klinik Estetika dr. Affandi tidak bertanggungjawab atas adanya pembelian yang telah/melalui proses terakhir atau pembayaran yang Anda lakukan.</li></ol><p> Pihak Klinik Estetika dr. Affandi dapat mengubah/merevisi semua syarat dan ketentuan yang tertera tanpa pemberitahuan terlebih dahulu. Untuk setiap pelanggaran yang dilakukan akan mendapatkan hukuman/sanksi berdasarkan hukum &amp; Undang-undang yang berlaku di Indonesia.</p> </ion-item> </ion-list> </ion-content> </ion-view>'), 
        t.put("templates/users/profile.html", '<ion-view view-title="Profil"> <ion-content><div class="list list-inset"><div class="item item-icon-left"> <i class="icon ion-ios-person-outline"></i> <strong>Foto Profil</strong></div><div class="item item-image"> <img id="profilePicture" class="profilePicture" ng-src="{{profileData.picture}}"></div> <button class="button button-block button-calm" ng-click="getProfPic()"><strong>Ubah Foto Profil</strong></button></div><div class="list list-inset"><div class="item item-icon-left"> <i class="icon ion-ios-list-outline"></i> <strong>Informasi</strong></div><form ng-submit="changeProfile()"> <label class="item item-input item-floating-label"> <span class="input-label"><strong>Nama Lengkap</strong></span> <input type="text" placeholder="Nama Lengkap" ng-model="profileData.full_name"> </label> <label class="item item-input item-select"><div class="input-label"><strong>Jenis Kelamin</strong></div> <select ng-model="profileData.gender"><option value="P">Wanita</option><option value="L">Pria</option> </select> </label> <label class="item item-input item-floating-label"> <span class="input-label"><strong>Alamat Email</strong></span> <input type="email" placeholder="Alamat Email" ng-model="profileData.email"> </label> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>No Handphone</strong></span> <input type="tel" placeholder="No Handphone" ng-model="profileData.phone"></label> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Tanggal Lahir</strong></span> <input type="date" ng-model="profileData.dob"> </label> <label class="item item-input item-select"><div class="input-label"><strong>Provinsi</strong></div> <select ng-model="profileData.province" ng-options="a.id as a.name for a in profileData.provinces" ng-change="getCity(profileData.province)"> </select> </label> <label class="item item-input item-select"><div class="input-label"><strong>Kota</strong></div> <select ng-model="profileData.city" ng-options="a.id as a.name for a in profileData.cities"> </select> </label> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Kode Pos</strong></span> <input type="number" placeholder="Kode Pos" ng-model="profileData.postal_code"> </label> <label class="item item-input item-floating-label"> <span class="input-label"><strong>Alamat</strong></span><textarea msd-elastic="" type="text" placeholder="Alamat" ng-model="profileData.address"></textarea></label> <button class="button button-block button-calm" type="submit"><strong>Simpan Perubahan</strong></button></form></div><div class="list list-inset"><div class="item item-icon-left"> <i class="icon ion-ios-locked-outline"></i> <strong>Ubah Password</strong></div><form ng-submit="changePassword()"> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Password Lama</strong></span> <input type="password" placeholder="Password Lama" ng-model="profileData.passwordLama" autocomplete="off"></label> <label class="item item-input item-stacked-label"> <span class="input-label"><strong>Password Baru</strong></span> <input type="password" placeholder="Password Baru" ng-model="profileData.passwordBaru" autocomplete="off"></label> <button class="button button-block button-calm" type="submit"><strong>Ubah Password</strong></button></form></div> </ion-content> </ion-view>'), 
        t.put("templates/videos/index.html", '<ion-view cache-view="false" view-title="Video Consultation" id="video-consultation"> <ion-content style="margin-bottom:0px;padding-bottom:0px;"> <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshAvailableSessions()"></ion-refresher> <ion-list ng-show="bookedSessionData"> <ion-item class="item-divider">My Booking</ion-item> <ion-item class="item-button-right" ng-click="readyToConsultation(bookedSessionData)"><h2>{{bookedSessionData.date}}</h2><p>{{bookedSessionData.start_time}} - {{bookedSessionData.end_time}} {{bookedSessionData.time_remaining}}</p> <button class="button button-assertive" ng-click="cancelBook($event)">Cancel</button> </ion-item> <br /> </ion-list> <ion-list> <ion-item class="item-divider">Available bookings</ion-item><div ng-repeat="item in availableSessions"> <ion-item class="item-stable" ng-click="toggleGroup(item)" ng-class="{active: isGroupShown(item)}"> <i class="icon" ng-class="isGroupShown(item) ? \'ion-minus\' : \'ion-plus\'"></i> &nbsp; {{item.date}}</ion-item> <ion-item ng-repeat="session in item.sessions" ng-show="isGroupShown(item)" class="item-button-right"><h2>{{session.start_time}} - {{session.end_time}}</h2><p>{{session.status}}</p> <button class="button button-positive" ng-click="book(session)" ng-hide="isSessionFinished(session)">Book</button> </ion-item></div> </ion-list> </ion-content> </ion-view>'), 
        t.put("templates/videos/live.html", '<ion-view view-title="Konsultasi Video" id="consultation"> <ion-content><div class="list mg-b-0" ng-if="!consultationData" ng-repeat="consultation in consultations | orderBy:\'-id\'"><div class="item item-text-wrap item-thumbnail-left"> <img ng-show="consultation.image" ng-src="{{consultation.image}}"><h2>{{consultation.status}}</h2><p>{{consultation.created_at}}</p><div style="clear:both"></div> <button ng-if="consultation.status == \'Tersedia\'" ng-click="buyPrescription(consultation.id)" class="button button-calm button-block button-stable">Beli</button></div></div><div ng-if="consultationData"></div> </ion-content> </ion-view>'), 
        t.put("templates/videos/waiting.html", '<ion-view view-title="Konsultasi Video" id="consultation"><div id="publisher"></div><div id="subscriber"></div> <ion-content ng-hide="isSubscribing"><div class="list card"><div class="item item-text-wrap calm-bg text-center light waiting-content">Sesi konsultasi Anda akan dimulai dalam waktu <br /> <br /> <timer max-time-unit="\'minute\'" end-time="end_waiting_time" interval="1000"><h1 class="light">{{mminutes}}:{{sseconds}}</h1> </timer> <br /><p ng-repeat="text in textWarning">{{text}}</p></div></div> </ion-content> <ion-content><p>Subscriber:</p> <ot-layout props="{animate:true,bigFixedRatio:true}"> <ot-subscriber ng-repeat="stream in streams" stream="stream" props="{style: {nameDisplayMode: \'off\'}}"></ot-subscriber><div id="facePublisher" ng-if="publishing"> <ot-publisher id="publisher" props="{style: {nameDisplayMode: \'off\'}, resolution: \'1280x720\', frameRate: 30}"></ot-publisher></div> <reconnecting-overlay id="reconnectingOverlay" ng-if="reconnecting" ng-cloak></reconnecting-overlay> </ot-layout> </ion-content> </ion-view>'),
        t.put("templates/views/home.html", '<ion-view view-title="Estetika dr. Affandi" id="home"> <ion-content><div class="home-start"> <ion-slide-box delegate-handle="banner-side-box" on-slide-changed="slideHasChanged($index)"> <ion-slide ng-repeat="banner in banners"> <button class="button button-clear box blue" ng-click="linkToArticle({{banner}})"> <img class="full-image" ng-style="{\'width\':my_width}" ng-src="https://klinikestetika.com/{{ banner.image }}"> </button> </ion-slide> </ion-slide-box><div ng-show="bannersLoaded" class="home-contents"><div class="consultation"><div class="row pd-0"><div class="col col-33 pd-0 image"> <img class="full-image thumb" src="https://klinikestetika.com/images/home-banner-doctor.png"></div><div class="col col-67 content"><h4>FREE ONLINE <strong>CONSULTATION</strong></h4><p>Konsultasikan kesehatan dan kecantikan kulit Anda secara gratis di sini melalui Konsultasi Foto {{additionalTextOnAndroid}}</p> <button ng-click="openConsultation()" class="button button-balanced button-block button-medium mg-0">KONSULTASI SEKARANG</button></div></div></div><div class="products"><div class="row pd-0"><div class="col col-33 pd-0 image"> <img class="product-default" src="https://klinikestetika.com/images/oil-control-serum.png"></div><div class="col col-67 content"><p class="calm">OUR PRODUCT</p><h4>LOTION <strong>OIL CONTROL</strong> (SERUM VITAMIN C)</h4><p>Dapatkan kemudahan untuk membeli produk perawatan kulit dimanapun Anda berada dengan Estetika M-Commerce</p> <button ui-sref="app.product" class="button button-balanced button-block button-medium">PESAN SEKARANG</button></div></div></div></div></div> </ion-content> </ion-view>'), 
        t.put("templates/views/promo.html", '<ion-view view-title="Promo" id="home"> <ion-content lazy-scroll><div class="list"> <a class="begin-post article" ng-repeat="banner in banners" ng-click="loadArticle({{banner}})"><div class="thumbnail-article"><div class="meta-article"><span> <i class="icon ion-calendar"></i> {{banner.updated_at}}</span></div> <img class="full-image" image-lazy-src="https://klinikestetika.com/{{ banner.image }}" image-lazy-loader="dots"><div class="title-article"><b>{{banner.title}}</b></div></div> </a></div> </ion-content> </ion-view>'), 
        t.put("templates/views/settings.html", '<ion-view view-title="Settings"> <ion-content><div class="list"> <ion-toggle> <span class="settings-item__text">Allow Push Notifications</span> </ion-toggle> <ion-toggle> <span class="settings-item__text">Allow cookies</span> </ion-toggle></div> </ion-content> </ion-view>'), 
        t.put("templates/products/checkout/shipping.html", '<ion-view cache-view="false" view-title="Pengiriman" id="products"> <ion-content class="products-shipping-start"><div class="list form payment" ng-if="!mobile_session"><div class="padding">Sudah punya Akun? Login Untuk Mempercepat Belanja Anda <button class="button button-positive button-block text-left" ng-click="login()">Login</button></div> <label class="item item-input item-stacked-label"> <span class="input-label">Nama Lengkap <span style="color:red">*</span></span> <input type="text" ng-model="shippingData.full_name" placeholder="Nama Lengkap"> </label><div class="item item-input item-stacked-label"> <span class="input-label">Gender <span style="color:red">*</span></span> <label class="item item-select"> <select ng-model="shippingData.gender" name="gender"><option value="L">Male</option><option value="F">Perempuan</option> </select> </label></div> <label class="item item-input item-stacked-label"> <span class="input-label">No. Telepon/HP <span style="color:red">*</span></span> <input type="tel" ng-model="shippingData.phone" placeholder="(+62)"> </label> <label class="item item-input item-stacked-label"> <span class="input-label">Tanggal Lahir <span style="color:red">*</span></span> <input type="date" ng-model="shippingData.dob"> </label> <label class="item item-input item-stacked-label"> <span class="input-label">Email <span style="color:red">*</span></span> <input type="email" ng-model="shippingData.email" placeholder=""> </label> <ion-toggle ng-model="shippingData.is_old_patient" toggle-class="toggle-calm" ng-true-value="1" ng-false-value="0" name="old_patient"> <span class="settings-item__text"> Saya pasien lama </span> </ion-toggle></div><div class="list form payment"> <label class="item item-input item-stacked-label"> <span class="input-label payment-label">Alamat <span class="assertive">*</span></span><textarea ng-model="shippingData.address" placeholder="Alamat"></textarea></label><div class="item item-input item-stacked-label"> <span class="input-label payment-label">Provinsi <span class="assertive">*</span></span> <label class="item item-select"> <select ng-model="shippingData.province" ng-options="a.id as a.name for a in provinces" ng-change="getCities(shippingData.province)"></select> </label></div><div class="item item-input item-stacked-label"> <span class="input-label payment-label">Kota <span class="assertive">*</span></span> <label class="item item-select"> <select ng-model="shippingData.city" ng-options="a.id as a.name for a in cities" ng-change="getShippingPrice(shippingData.city)"></select> </label></div><div class="item item-input-inset"> <label class="item-input-wrapper"> <span class="input-label payment-label">Kode Pos <span class="assertive">*</span></span> <input ng-model="shippingData.postal_code" type="text" placeholder="Kode Pos" pattern="d*" required> </label></div><label class="item item-input item-stacked-label"> <span class="input-label payment-label">Kode Promo (Optional)</span> <input ng-model="shippingData.promo_code" type="text" placeholder="Kode Promo" ng-change="getPromoCode()"> </label><label class="item item-input"> <span class="input-label payment-label">Diskon</span> <input type="text" ng-value="shippingData.discount|currency:\'Rp \'" ng-disabled="true"> </label><label class="item item-input"> <span class="input-label payment-label">Biaya Pengiriman</span> <input type="text" ng-value="shippingData.shipping_price|currency:\'Rp \'" ng-disabled="true"> </label><label class="item item-input"> <span class="input-label payment-label">Harga</span> <input type="text" ng-value="cart_total|currency:\'Rp \'" ng-disabled="true"> </label><label class="item item-input"> <span class="input-label payment-label">Total Harga</span> <input class="total_price" type="text" ng-value="shippingData.total_price|currency:\'Rp \'" ng-disabled="true"> </label></div><div class="padding"> <button ng-click="checkoutOrder()" class="button button-calm button-block">Pembayaran</button></div> </ion-content> </ion-view>'), 
        t.put("templates/services/kulit/detail.html", '<ion-view view-title="{{data.title}}" id="serviceKulitDetail"> <ion-content><div class="begin-post article"><div class="thumbnail-article"> <img ng-if="data.image" class="cover" ng-src="https://klinikestetika.com/{{data.image}}"></div><div style="padding:0px 20px;"><div class="title-article"><b>{{data.title}}</b></div><div class="meta-article"> <span> <i class="icon ion-calendar"></i> {{data.updated_at}}</span> <span><i class="icon ion-ios-pricetag"></i> {{data.name}}</span></div><div class="content-article" ng-bind-html="content"></div></div></div> </ion-content> </ion-view>'), 
        t.put("templates/services/kulit/index.html", '<div class="list"> <a href="#/app/service/kulit/detail/{{kulit.id}}" class="item" ng-repeat="kulit in kulits">{{ kulit.name }}</a></div>'), 
        t.put("templates/services/spa/detail.html", '<ion-view view-title="{{data.title}}" id="serviceSpaDetail"> <ion-content> <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshDetailArticle()"></ion-refresher><div class="begin-post article"><div class="thumbnail-article"> <img class="full-image" ng-src="https://klinikestetika.com/{{data.image}}"></div><div style=""><div class="title-article"><b>{{data.title}}</b></div><div class="meta-article"> <span><i class="icon ion-calendar"></i> {{data.updated_at}}</span> <span> <i class="icon ion-ios-pricetag"></i> {{data.name}} </span></div><hr><div ng-bind-html="data.description"></div></div></div> </ion-content> </ion-view>'), 
        t.put("templates/services/spa/index.html", "")
}]);
