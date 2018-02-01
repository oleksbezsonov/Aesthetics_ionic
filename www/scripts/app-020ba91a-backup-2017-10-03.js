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
    n.totalNext = 5, n.totalNow = 0, n.kulits = [], n.spas = [], n.theEnd = !1, n.showLoading(), n.loadMore = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/services/groups/2/" + n.totalNow + "/5").then(function(t) {
            0 == t.data ? n.theEnd = !0 : (n.totalNow = n.totalNext, n.totalNext += 5, n.spas = n.spas.concat(t.data.map(function(t) {
                return t
            }))), n.$broadcast("scroll.infiniteScrollComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }, n.refreshSpas = function() {
        n.totalNow = 0, n.totalNext = 5, n.spas = [], n.theEnd = !1, n.loadMore(), n.$broadcast("scroll.refreshComplete")
    }, e.get("https://klinikestetika.com/api/v1/estetika/services/groups/1").then(function(e) {
        n.kulits = e.data.map(function(t) {
            return t
        }), t.hide()
    }, function(e) {
        t.hide(), n.showToast("Gagal Melakukan Penarikan Data", "long", "bottom"), console.error("ERR", e)
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
}]), angular.module("estetika").controller("ArticlesController", ["$scope", "$location", "$http", "$ionicLoading", function(t, n, e, a) {
    t.totalNext = 10, t.totalNow = 0, t.categories = [], t.category = 1, t.articles = [], t.theEnd = !1, e.get("https://klinikestetika.com/api/v1/estetika/post/category").then(function(n) {
        t.categories = n.data.map(function(t) {
            return t
        })
    }, function(n) {
        t.showToast("Gagal Melakukan Penarikan Data", "long", "bottom"), console.error("ERR", n)
    }), t.loadMore = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/posts/category/" + t.category + "/" + t.totalNow + "/10").then(function(n) {
            0 == n.data ? (console.log(n.data), t.theEnd = !0) : (t.totalNow = t.totalNext, t.totalNext += 10, t.articles = t.articles.concat(n.data.map(function(t) {
                return t.updated_at = moment(t.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY"), t.isContainImage = t.image.indexOf("NULL") == -1, t
            }))), t.$broadcast("scroll.infiniteScrollComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.categoryChange = function(n) {
        t.category = n, t.totalNow = 0, t.totalNext = 10, t.articles = [], t.theEnd = !1, t.loadMore()
    }, t.refreshArticle = function() {
        t.totalNow = 0, t.totalNext = 10, t.articles = [], t.theEnd = !1, t.loadMore(), t.$broadcast("scroll.refreshComplete")
    }
}]).controller("ArticleDetailController", ["$ionicLoading", "$scope", "$http", "$stateParams", "$ionicSideMenuDelegate", "$sce", "$sanitize", "$cordovaInAppBrowser", function(t, n, e, a, i, o, s, l) {
    n.$on("$ionicView.enter", function() {
        i.canDragContent(!1)
    }), n.$on("$ionicView.leave", function() {
        i.canDragContent(!0)
    }), n.showLoading(), n.date = a.article_date, e.get("https://klinikestetika.com/api/v1/estetika/post/" + a.article_id).then(function(e) {
        n.data = e.data, n.data.updated_at = moment(e.data.updated_at, "YYYY-MM-DD HH:mm:ss").format("D MMMM YYYY - HH:mm"), n.content = e.data.content, n.isContainImage = n.data.image.indexOf("NULL") == -1, t.hide()
    }, function(e) {
        n.showToast("Gagal Melakukan Penarikan Data", "long", "bottom"), t.hide(), console.error("ERR", e)
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
        n.showToast("Gagal Melakukan Penarikan Data", "long", "bottom"), console.error("ERR", t)
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
        n.showToast("Gagal Melakukan Penarikan Data", "long", "bottom"), console.error("ERR", t)
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
        }, function(t) {}) : (console.log("ganteng"), s.hide(), t.showToast("Foto tampak depan, kanan, dan kiri harus diisi", "long", "bottom"))
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
        t.showLoading();
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
            console.log(e), i.hide(), t.showToast("Pesan Anda telah dikirimkan"), n.go("app.home")
        })["catch"](function(t) {
            console.log(t), i.hide()
        }) : t.showToast("Mohon masukkan data untuk semua kolom")
    }
}]), angular.module("estetika").controller("HomeController", ["$ionicLoading", "$scope", "$http", "$state", "$localstorage", "Scopes", "$ionicSlideBoxDelegate", "$ionicPopup", function(t, n, e, a, i, o, s, l) {
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
            title: "Contoh doang",
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
        }), console.log(n.banners), n.bannersLoaded = !0, s.update()
    }, function(t) {
        console.error("ERR", t)
    })
}]), angular.module("estetika").controller("MainController", ["$scope", "$ionicModal", "$location", "$timeout", "$http", "$localstorage", "$cordovaToast", "$cordovaCamera", "$ionicContentBanner", "$ionicHistory", "$cordovaProgress", "$state", "$ionicLoading", "$rootScope", "$cordovaNetwork", "$cordovaActionSheet", "$cordovaSpinnerDialog", "$cordovaInAppBrowser", "$ionicSideMenuDelegate", "$ionicPopup", "$ionicActionSheet", function(t, n, e, a, i, o, s, l, r, c, d, u, p, m, g, b, h, k, v, f, w) {
    Date.prototype.yyyymmdd = function() {
        var t = this.getFullYear().toString(),
            n = (this.getMonth() + 1).toString(),
            e = this.getDate().toString();
        return t + "-" + (n[1] ? n : "0" + n[0]) + "-" + (e[1] ? e : "0" + e[0])
    }, i.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", t.registerData = {}, t.loginData = {};
    var y = new Date;
    y.setFullYear(y.getUTCFullYear() - 1), t.maxDob = y.yyyymmdd(), t.loginData.email = "", t.loginData.password = "", t.cart_total = 0, t.cities = [], t.provinces = [], t.isCartEmpty = !0, t.global_menus = [{
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
        text: "Services"
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
    }, t.cartEditQty = function(n, e) {
        var a = "https://klinikestetika.com/api/v1/estetika/product/cart/edit/qty";
        i.post(a, {
            id: e,
            qty: n,
            mobile_session: o.get("mobile_session"),
            session: o.get("session")
        }).then(function(n) {
            1 !== n.data && t.showToast("Harus Memiliki Resep", "long", "bottom"), t.getAllCartItems()
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
            1 !== n.data && t.showToast("Harus Memiliki Resep", "long", "bottom"), t.getAllCartItems()
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.setAllStatus(), t.attributes = ["name", "email", "mobile_session", "gender", "profile_picture", "session"], t.clearStatus = function() {
        t.attributes.forEach(function(n) {
            return o.set(n, ""), "name" !== n ? t[n] = o.get(n) : t.full_name = o.get(n), n
        })
    }, t.getAllCartItems = function() {
        t.cart_total = 0, t.product_cart_qty = [], t.product_cart_sizes = [], t.product_cart_size = [];
        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        t.qty_options = n.map(function(t) {
            return {
                id: t,
                name: t.toString()
            }
        });
        var e = "" == o.get("mobile_session") ? 0 : 1;
        i.get("https://klinikestetika.com/api/v1/estetika/product/cart/" + e + "/" + o.get("mobile_session") + "/" + o.get("session")).then(function(n) {
            console.log(n), t.product_carts = n.data, t.isCartEmpty = !0;
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
            console.log(t.product_cart_size), console.log(JSON.stringify(t.product_cart_sizes, null, 2))
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.deleteCartItem = function(n) {
        var e = t.product_carts.find(function(t) {
            return t.id == n
        });
        console.log(e), t.product_carts = t.product_carts.filter(function(t) {
            return t.id !== n
        }), console.log(t.product_carts), t.product_cart_size = t.product_cart_size.filter(function(t) {
            return t.product_id !== n
        }), console.log(t.product_cart_size), t.product_cart_sizes = t.product_cart_sizes.map(function(t) {
            return t.filter(function(t) {
                return t.product_id !== n
            })
        }).filter(function(t) {
            return 0 !== t.length
        }), console.log(t.product_cart_sizes), t.product_carts.length || (t.isCartEmpty = !0, v.toggleRight()), t.cart_total -= e.price
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
            console.log(n), 0 == n.data ? t.showToast("Gagal Melakukan Pendaftaran", "long", "bottom") : (t.closeLogin(), t.closeRegister(), t.showToast("Anda Berhasil Melakukan Pendaftaran. Periksa Email Anda Untuk Melakukan Aktivasi", "long", "bottom"))
        }, function(n) {
            console.error("ERR", n), "Email address is not unique" == n.data.detail ? t.showToast("Harap registrasi akun menggunakan alamat email yang berbeda") : "Internal Server Error" == n.statusText && t.showToast("Harap isi form registrasi akun dengan benar")
        }) : t.showToast("Batas minimal dan maksimal nomor telepon yang diisi masing-masing  10 dan 12 angka", "long", "bottom") : t.showToast("Usia minimum 14 tahun", "long", "bottom")
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
    console.log(s.total);
    var u = !1;
    if ("" != i.mobile_session && i.mobile_session) var p = 1;
    else var p = 0;
    o.get("https://klinikestetika.com/api/v1/estetika/product/cart/" + p + "/" + l.get("mobile_session") + "/" + l.get("session")).then(function(t) {}), i.shippingData = {
        total: s.total,
        province: 13,
        city: 189
    }, o.get("https://klinikestetika.com/api/v1/estetika/profile/" + l.get("mobile_session")).then(function(t) {
        0 !== t.data ? (i.data = t.data, i.shippingData.full_name = i.data.full_name, i.shippingData.email = i.data.email, i.shippingData.phone = i.data.phone, i.shippingData.dob = new Date(i.data.dob), i.shippingData.gender = i.data.gender, i.shippingData.picture = i.data.picture, i.shippingData.address = i.data.address, i.shippingData.postal_code = i.data.postal_code, i.shippingData.province = i.data.province_id, i.shippingData.is_old_patient = 0, i.shippingData.city = i.data.city_id, i.shippingData.password = "", i.shippingData.newUser = 0, i.getProvinces(), i.getCities(i.shippingData.province)) : (i.shippingData.newUser = 1, i.getProvinces(), i.getCities(i.shippingData.province), i.shippingData.dob = new Date("2015-01-01"))
    }, function(t) {
        console.error("ERR", t)
    }), i.checkPromoCode = function() {
        i.shippingData.promo ? (n.show(), i.addDiscount()) : i.showToast("Masukkan kode promo terlebih dahulu", "long", "bottom")
    }, i.addDiscount = function() {
        u ? (n.hide(), i.showToast("Anda telah memasukkan kode Promo", "long", "bottom")) : window.setTimeout(function() {
            n.hide(), u = !0, i.shippingData.total = .9 * i.shippingData.total, console.log(i.shippingData.total), i.showToast("Anda mendapatkan potongan harga 10%", "long", "bottom")
        }, 1e3)
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
            promo: i.shippingData.promo,
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
    t.totalNext = 12, t.totalNow = 0, t.categories = [], t.category = 1, t.products = [], t.theEnd = !1, t.states = {
        loading: !0,
        searched: !1
    }, e.get("https://klinikestetika.com/api/v1/estetika/product/category").then(function(n) {
        t.states.loading = !1, t.categories = n.data.map(function(t) {
            return t
        })
    }, function(n) {
        t.states.loading = !1, console.error("ERR", n)
    }), t.loadProducts = function() {
        t.showLoading(), e.get("https://klinikestetika.com/api/v1/estetika/products/category/" + t.category + "/0/12").then(function(n) {
            a.hide(), t.products = n.data
        })
    }, t.loadMore = function() {
        e.get("https://klinikestetika.com/api/v1/estetika/products/category/" + t.category + "/" + t.totalNow + "/12").then(function(n) {
            0 == n.data ? (t.theEnd = !0, console.log("ganteng")) : (t.totalNow = t.totalNext, t.totalNext += 12, t.products = t.products.concat(n.data.map(function(t) {
                return t
            }))), t.$broadcast("scroll.infiniteScrollComplete")
        }, function(t) {
            console.error("ERR", t)
        })
    }, t.refreshProduct = function() {
        o && (o(), o = null), t.totalNow = 0, t.totalNext = 12, t.products = [], t.theEnd = !1, t.loadMore(), t.$broadcast("scroll.refreshComplete")
    }, t.categoryChange = function(n) {
        t.category = n, t.totalNow = 0, t.totalNext = 12, t.products = [], t.theEnd = !1, t.loadMore()
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
}]).controller("ProductDetailController", ["$scope", "$http", "$stateParams", "$ionicLoading", "$ionicSideMenuDelegate", function(t, n, e, a, i) {
    t.$on("$ionicView.enter", function() {
        i.canDragContent(!1)
    }), t.$on("$ionicView.leave", function() {
        i.canDragContent(!0)
    }), n.get("https://klinikestetika.com/api/v1/estetika/product/" + e.product_id).then(function(n) {
        console.log("Success", n), t.data = n.data
    }, function(n) {
        t.showToast("Maaf ada kesalahan pada saat mengambil detail produk", "long", "bottom"), console.error("ERR", n)
    }), t.refreshDetailProduct = function() {
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
        t.data = n.data, t.profileData.full_name = t.data.full_name, t.profileData.email = t.data.email, t.profileData.phone = t.data.phone, t.profileData.dob = new Date(t.data.dob), t.profileData.gender = t.data.gender, t.profileData.picture = t.data.picture, t.profileData.address = t.data.address, t.profileData.postal_code = t.data.postal_code, t.profileData.province = t.data.province_id, t.profileData.city = t.data.city_id, t.data.picture !== a.get("profile_picture") && (a.set("profile_picture", t.data.picture), document.getElementById("avatar").src = t.data.picture), i.hide()
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
        t.profileData.provinces = [], t.profileData.provinces = e.data.map(function(t) {
            return t
        }), n.get("https://klinikestetika.com/api/v1/estetika/cities/" + t.profileData.province).then(function(n) {
            t.profileData.cities = [], t.profileData.cities = n.data.map(function(t) {
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
        t.put("templates/login.html", '<ion-modal-view id="login">\n\n\n    <ion-header-bar class="bar bar-calm">\n        <div class="buttons">\n            <button class="button button-clear" ng-click="closeLogin()">\n                <i class="icon ion-ios-close-empty"></i>\n            </button>\n        </div>\n        <h1 class="title">Login</h1>\n    </ion-header-bar>\n\n    <ion-content>\n\n\n        <form ng-submit="doLogin()">\n            <div class="list">\n                <label class="item item-input item-floating-label">\n                    <span class="input-label">Email</span>\n                    <input type="email" ng-model="loginData.email" placeholder="Email">\n                </label>\n                <label class="item item-input item-floating-label">\n                    <span class="input-label">Password</span>\n                    <input type="password" ng-model="loginData.password" placeholder="Password">\n                </label>\n            </div>\n            <div class="padding">\n                <button class="button button-outline-black button-block" type="submit">Login</button>\n            </div>\n        </form>\n\n            <button class="button button-positive button-clear button-block" ng-click="register()" style="text-transform:inherit">\n              <span style="color:black">Belum punya akun?</span> Daftar di sini\n            </button>\n\n\n\n    </ion-content>\n</ion-modal-view>\n'), 
        t.put("templates/main.html", '<ion-side-menus enable-menu-with-back-views="true">\n    <ion-side-menu-content>\n        <ion-nav-bar class="bar-calm">\n            <!--<ion-nav-back-button></ion-nav-back-button>-->\n\n            <ion-nav-buttons side="left">\n                <button menu-toggle="left" class="button button-icon button-clear ion-navicon">\n                </button>\n            </ion-nav-buttons>\n\n            <ion-nav-buttons side="secondary">\n                <button menu-toggle="right" class="button button-icon button-clear ion-ios-cart" ng-show="!isCartEmpty">\n                </button>\n            </ion-nav-buttons>\n\n        </ion-nav-bar>\n        <ion-nav-view name="menuContent"></ion-nav-view>\n    </ion-side-menu-content>\n\n\n\n\n    <ion-side-menu side="right">\n        <!-- <ion-pane side-menu-content drag-content="false"> -->\n            <div class="bar bar-header bar-calm">\n                <h2 class="title title-left">Keranjang Belanja</h2>\n                <button menu-close ng-hide="isCartEmpty" ng-click="clearAllCarts()" class="button button-clear text-capitalize">Kosongkan</button>\n                <!-- <button ng-click="clearAllCarts()" class="button button-clear text-capitalize">Clear</button> -->\n            </div>\n\n            <ion-content class="has-header has-footer">\n\n                <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshCart()"></ion-refresher>\n\n                <div class="list">\n                    <div ng-repeat="product_cart in product_carts" class="item" style="padding:0px">\n                        <div class="item item-avatar item-button-right item-text-wrap">\n                            <img ng-src="{{product_cart.image}}">\n                            <b style="font-size:14px">{{product_cart.title}}</b>\n                            <button class="button button-clear button-light button-small"\n                              ng-click="deleteCartItem(product_cart.id)">\n                              <i class="icon ion-close"></i>\n                            </button>\n                        </div>\n\n                        <div class="list">\n\n                            <label class="item item-input item-select">\n                                <div class="input-label">Quantity</div>\n                                <select data-ng-options="qty_option.name for qty_option in qty_options" data-ng-model="product_cart_qty[product_cart.product_key]" ng-selected="product_cart.qty" ng-change="cartEditQty(product_cart_qty[product_cart.product_key].id,product_cart_size[product_cart.product_key].id,product_cart.id)"></select>\n                            </label>\n\n                            <label class="item-input item-select">\n                                <span class="input-label">Size</span>\n                                 <select data-ng-options="size.name for size in product_cart_sizes[product_cart.product_key]"\n                                   data-ng-model="product_cart_size[product_cart.product_key]"\n                                   ng-change="cartEditSize(product_cart_qty[product_cart.product_key].id,product_cart_size[product_cart.product_key].id,product_cart.id)"\n                                   ng-disabled="product_cart_sizes[product_cart.product_key].length == 1"\n                                   ></select>\n                            </label>\n\n                            <div class="item">{{ product_cart.price|currency:"Rp ":0 }}</div>\n                        </div>\n\n                    </div>\n                    <button menu-close ng-show="!isCartEmpty" class="button button-full button-payment mg-t-0" ui-sref="app.product_shipping">\n                        Ke Pembayaran <i class="icon ion-arrow-right-c"></i>\n                    </button>\n                </div>\n\n            </ion-content>\n\n            <!-- <div  ng-show="!isCartEmpty" class="bar bar-footer bar-stable bar-stackable">\n                <div class="title text-left">\n                    <i class="icon ion-android-cart" style="margin-right:10px"></i>\n                    <b>Total {{ cart_total|currency:"Rp ":0 }}</b>\n                </div>\n            </div> -->\n\n\n            <ion-footer-bar ng-show="!isCartEmpty" class="bar bar-stable total">\n                <div class="title text-left">\n                    <i class="icon ion-android-cart" style="margin-right:10px"></i>\n                    <b>Total {{ cart_total|currency:"Rp " }}</b>\n                </div>\n            </ion-footer-bar>\n            <!-- <ion-footer-bar ng-if="!isCartEmpty">\n                <button menu-close class="bar bar-footer bar-balanced" ui-sref="app.product_shipping({\'total\':cart_total})">\n                    <div class="title-white">Ke Pembayaran <i class="icon ion-arrow-right-c"></i></div>\n                </button>\n            </ion-footer-bar>\n\n -->       <!-- </ion-pane> -->\n    </ion-side-menu>\n\n\n\n\n\n<!-- Menu Left -->\n    <ion-side-menu side="left">\n        <!-- <ion-pane side-menu-content drag-content="false"> -->\n            <ion-content>\n\n                <!-- Logged in Profile -->\n                <button menu-close class="item item-calm item-avatar" ng-if="mobile_session" ui-sref="app.profile"\n                  style="text-transform:inherit;text-align:left">\n                  <!-- <button class="item-content" ui-sref="app.profile" style="text-transform:inherit;text-align:left"> -->\n                    <img id="avatar" style="object-fit: cover" ng-if="!profile_picture" ng-src="images/user-default.png">\n                    <img id="avatar" style="object-fit: cover" ng-if="profile_picture" ng-src="{{profile_picture}}">\n\n                    <h2 class="logged-in">{{full_name}}</h2>\n                    <p class="logged-in">{{email}}</p>\n                  <!-- </button> -->\n                </button>\n\n                <button ng-repeat="menu in global_menus" menu-close class="button button-menu light-bg icon-left text-left button-full ion-ios-{{menu.icon}}-outline"\n                  ui-sref-active="active" ui-sref="{{menu.state}}">\n                    <!-- <i class="icon ion-ios-{{menu.icon}}-outline"></i> -->\n                    <p>{{menu.text}}</p>\n                </button>\n                <button ng-if="!mobile_session" menu-close class="button button-menu light-bg icon-left text-left button-full ion-ios-locked-outline"\n                  ui-sref-active="active" ng-click="login()">\n                    <p>Login</p>\n                </button>\n\n\n\n                <!-- Logged In Menu -->\n                <div ng-if="mobile_session">\n                    <div class="item item-divider">\n                        Your Account\n                    </div>\n\n                    <button ng-repeat="menus in user_menus" menu-close class="button button-menu light-bg icon-left text-left button-full ion-ios-{{menus.icon}}-outline"\n                      ui-sref-active="active" ui-sref="{{menus.state}}" ng-show="menus.isAndroid">\n                        <p>{{menus.text}}</p>\n                    </button>\n                    <button menu-close class="button button-menu light-bg icon-left text-left button-full ion-log-out"\n                      ui-sref-active="active" ng-click="logout()">\n                        <p>Logout</p>\n                    </button>\n                </div>\n\n\n                <!-- Settings Menu -->\n                <!-- <ion-list ng-if="mobile_session">\n                    <div class="item item-divider">\n                        Settings\n                    </div>\n\n                     <a menu-close class="item item-icon-left" ui-sref-active="active" ui-sref="app.settings">\n                        <i class="icon ion-ios-gear-outline"></i>\n                        Account\n                    </a>\n\n                    <a menu-close class="item item-icon-left" ui-sref-active="active" ng-click="logout()">\n                        <i class="icon ion-log-out"></i>\n                        Logout\n                    </a>\n                </ion-list> -->\n            </ion-content>\n\n        <!-- </ion-pane> -->\n    </ion-side-menu>\n</ion-side-menus>\n'), 
        t.put("templates/register.html", '<ion-modal-view id="register">\n    <ion-header-bar>\n        <div class="buttons">\n            <button class="button button-clear" ng-click="closeRegister()">\n                <i class="icon ion-ios-close-empty"></i>\n            </button>\n        </div>\n        <h1 class="title">Daftar Akun</h1>\n    </ion-header-bar>\n\n    <ion-content>\n        <form id="register-form" name="form" novalidate>\n        <div class="list">\n\n            <!-- Nama Lengkap -->\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">Nama Lengkap <span style="color:red">*</span></span>\n                <input type="text" ng-model="registerData.full_name" name="fullName" placeholder="Nama lengkap Anda" required="">\n                <div ng-show="form.$submitted || form.fullName.$touched">\n                  <div class="assertive" ng-show="form.fullName.$error.required">Masukkan Nama Lengkap Anda.</div>\n                </div>\n            </label>\n\n\n            <!-- Gender -->\n            <div class="item item-input item-stacked-label">\n                <span class="input-label">Jenis Kelamin <span style="color:red">*</span></span>\n\n                <label class="item item-select">\n                    <select ng-model="registerData.gender" name="gender" required="">\n                        <option ng-model="registerData.gender" value="L">Laki-laki</option>\n                        <option ng-model="registerData.gender" value="F">Perempuan</option>\n                    </select>\n                </label>\n                <div ng-show="form.$submitted || form.gender.$touched">\n                  <div class="assertive" ng-show="form.gender.$error.required">Pilih jenis kelamin</div>\n                </div>\n            </div>\n\n\n            <!-- No. Telepon/HP -->\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">No. Telepon/HP <span style="color:red">*</span></span>\n                <input type="tel" ng-model="registerData.phone" name="phoneNumber" placeholder="(+62)" ng-minlength="10" ng-maxlength="12" required>\n                <div ng-show="form.$submitted || form.phoneNumber.$touched">\n                  <span class="assertive" ng-show="form.phoneNumber.$error.required">Masukkan nomor telepon/HP Anda </span>\n                  <span class="assertive" ng-show="form.phoneNumber.$error.number">Masukkan nomor Telepon/HP Anda. </span>\n                  <span class="assertive" ng-show="(form.phoneNumber.$error.minlength && form.phoneNumber.$dirty)">phone number should be 10 digits minimal. </span>\n                  <span class="assertive" ng-show="(form.phoneNumber.$error.maxlength && form.phoneNumber.$dirty)">phone number should be 12 digits maximal. </span>\n                </div>\n            </label>\n\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">Tanggal Lahir <span style="color:red">*</span></span>\n                <input type="date" min="1980-01-01" max="{{maxDob}}" ng-model="registerData.dob" name="dob" required>\n                <div ng-show="form.$submitted || form.dob.$touched">\n                    <div class="assertive" ng-show="form.dob.$error.required">Masukkan Tanggal Lahir Anda.</div>\n                </div>\n            </label>\n            <!-- Email -->\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">Email<span style="color:red">*</span></span>\n                <input type="email" ng-model="registerData.email" placeholder="username@domain.tld" name="email" required>\n                <div ng-show="form.$submitted || form.email.$touched">\n                  <div class="assertive" ng-show="form.email.$error.required">Mohon isi alamat Email Anda.</div>\n                  <div class="assertive" ng-show="form.email.$error.email">Mohon isi alamat Email Anda yang valid.</div>\n                </div>\n            </label>\n\n\n            <!--Password -->\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">Password <span style="color:red">*</span></span>\n                <input type="password" ng-model="registerData.password" placeholder="" name="password" required>\n                <div ng-show="form.$submitted || form.password.$touched">\n                    <div class="assertive" ng-show="form.password.$error.required">Masukkan password Anda.</div>\n                </div>\n            </label>\n\n\n            <!-- Password2 -->\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">Ulangi Password <span style="color:red">*</span></span>\n                <input type="password" ng-model="registerData.passwordConfirmation" placeholder="" name="confirmPassword" required>\n                <div ng-show="form.$submitted || form.confirmPassword.$touched">\n                    <div class="assertive" ng-show="form.confirmPassword.$error.required">Masukkan password Anda lagi.</div>\n                </div>\n            </label>\n\n\n            <ion-toggle ng-model="registerData.is_old_patient" toggle-class="toggle-calm" ng-true-value="1" ng-false-value="0" name="old_patient">\n                <span class="settings-item__text">\n                    Saya pasien lama <span style="color:red">*</span></span>\n                </span>\n            </ion-toggle>\n\n                <!-- <div class="row" style="margin-left:-10px">\n                    <div class="col">\n                        <label class="item item-radio">\n                            <input type="radio" value="1" ng-model="registerData.is_old_patient" name="old_patient">\n                            <div class="item-content">Yes</div>\n                            <i class="radio-icon ion-ios-checkmark-outline"></i>\n                        </label>\n                    </div>\n\n                    <div class="col">\n                        <label class="item item-radio">\n                            <input type="radio" value="0"  ng-model="registerData.is_old_patient" name="old_patient">\n                            <div class="item-content">No</div>\n                            <i class="radio-icon ion-ios-checkmark-outline"></i>\n                        </label>\n                    </div>\n                </div> -->\n            </div>\n\n            <div class="padding">\n                <button class="button button-block button-calm" ng-click="registerAccount()" type="submit">\n                    Daftar\n                </button>\n            </div>\n        </div>\n        </form>\n    </ion-content>\n</ion-modal-view>\n'),
        t.put("templates/about/index.html", '<ion-view view-title="Tentang Klinik Estetika" id="home">\n\t<ion-content lazy-scroll>\n\n\n\t\t<!-- Syarat Ketentuan -->\n\t\t<div class="list about">\n\t\t\t<div class="item wrap item-text-wrap">\n\t\t\t\t<img class="full-image" image-lazy-src="https://klinikestetika.com/images/about/about_01_new.jpg" image-lazy-loader="dots">\n\t\t\t\t<p>\n\t\t\t\t\t<h1>BEAUTY OUTSIDE HAPPY INSIDE</h1><p>Kulit yang sehat dan terawat tentu menjadi dambaan semua orang, oleh karena itu dr. M. Affandi Sp.KK(K) mengembangkan layanan dan produk perawatan kulit dengan standar medis untuk membantu mewujudkan\n\t\t\t\t\tkeinginan tersebut. Layanan dan produk perawatan yang dikembangkan oleh dr. Mochamad Affandi, Sp.KK(K) tersebut menggunakan formulasi dermatologi terbaik dan disusun secara personal untuk masing-masing pasien.</p>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tKlinik Estetika berawal dari praktek dokter pribadi dr. M.Affandi, Sp.KK(K) sejak tahun 1988 di Jl. Letnan Jendral S. Parman No. 16 A, Semarang. Berawal dari praktek dokter tersebut, dr. M. Affandi, Sp.KK(K) telah melayani berbagai perawatan kulit dengan\n\t\t\t\t\tstandar medis yang ketat. Berbekal respon positif dari masyarakat, mendorong beliau untuk memberikan pelayanan yang lebih baik lagi. Oleh karena itu sejak tanggal 6 Maret 1990, praktek dr. M. Affandi, Sp.KK(K) berpindah ketempat yang lebih luas dan\n\t\t\t\t\tlebih nyaman di Jl. Kyai Saleh No. 9 Semarang. Mengingat sebagian besar pasien berasal dari luar kota Semarang, Klinik Estetika juga menyediakan fasilitas penginapan bagi pasien-pasiennya.\n\t\t\t\t</p>\n\t\t\t\t<div class="row responsive-md">\n\t\t\t\t\t<img class="full-image" image-lazy-src="https://klinikestetika.com/images/about/about_02_new.jpg" image-lazy-loader="dots">\n\t\t\t\t\t\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSeiring dengan tuntutan perkembangan jaman dan tekad dari kami untuk semakin meningkatkan kualitas pelayanan kepada pasien, maka sejak tahun 2005 kami bertransformasi menjadi Klinik Estetika dr.Affandi, sebuah Klinik Spesialis Kulit yang menerapkan standar\n\t\t\t\t\t\t\tdermatologi bagi perawatan kulit pasien-pasiennya.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSelain inovasi di bidang produk perawatan dan jenis layanan untuk pasien, kami juga terus melakukan inovasi dalam bidang teknologi. Dengan tersedianya website e-commerce Klinik Estetika dr.Affandi maka pasien yang tidak dapat berkunjung secara langsung\n\t\t\t\t\t\t\tke Klinik Estetika tetap dapat melakukan konsultasi dengan tim dokter. Pasien yang sudah terdaftar juga bisa melakukan pemesanan produk perawatan melalui website.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tKlinik Estetika dr.Affandi merupakan klinik kecantikan pertama yang menyediakan layanan konsultasi online secara live. Kami menyediakan dua macam layanan konsultasi online yaitu photo consultation dan live video consultation.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tKlinik Estetika dr.Affandi juga merupakan klinik kecantikan pertama yang menyediakan layanan e-commerce bagi pasien-pasiennya. Kami memberikan kemudahan untuk para pasien yang ingin melakukan pemesanan krim tetapi tidak dapat datang ke Klinik Estetika.\n\t\t\t\t\t\t\tKami juga menyediakan 5 (lima) metode pembayaran yang akan memudahkan pasien dalam menyelesaikan pemesanan.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p>\n\t\t\t\t\tDengan makin berkembangnya teknologi kini smartphone menjadi salah satu alat yang dimiliki oleh hampir setiap individu. Dengan ini Klinik Estetika dr.Affandi meluncurkan Mobile Apps yang akan semakin memudahkan pasien yang ingin melakukan konsultasi secara\n\t\t\t\t\tonline (melalui photo consultation dan live video consultation) atau ingin melakukan pemesanan produk perawatan. Keberadaan mobile apps ini juga menempatkan Klinik Estetika dr.Affandi sebagai klinik kecantikan pertama yang menyediakan layanan melalui\n\t\t\t\t\taplikasi mobile.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tKami juga memahami mobilitas pasien yang cukup tinggi, dimana dalam satu hari bisa saja pasien berada di 2 kota yang berbeda dan berkunjung ke Klinik Estetika yang berbeda. Untuk itu kami mengembangkan sistem data base pasien “online real time” di seluruh\n\t\t\t\t\tcabang Klinik Estetika. Jadi, bukan menjadi masalah bila pasien berkunjung ke 2 Klinik Estetika yang berbeda dalam satu hari karena data pasien akan selalu update / terbarukan.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tDengan menerapkan standar profesionalisme yang tinggi dan standar medis yang ketat, maka sudah menjadi komitmen kami untuk memberikan pelayanan yang terbaik bagi seluruh pasien Klinik Estetika karena kesehatan, keindahan dan kecantikan adalah harta tak\n\t\t\t\t\tternilai.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tKlinik Estetika dr.Affandi berhasil membuktikan pencapaiannya dengan meraih penghargaan yang diselenggarakan oleh Majalah SWA dalam bidang Indonesia Healthcare Most Reputable Brand dua tahun berturut-turut yaitu pada tahun 2014 dan pada tahun 2015. Penghargaan\n\t\t\t\t\tini diterima oleh dr. Hengky Nur Hidayat selaku CEO Klinik Estetika dr.Affandi.\n\t\t\t\t</p>\n\t\t\t\t<h2>Vision 2018</h2>\n\t\t\t\t<p><em>To become the most admired skin-care company in Indonesia in delivering happiness experience</em></p>\n\t\t\t\t<h2>Mission</h2>\n\t\t\t\t<ul class="list-text"><li>\n\t\t\t\t\tTo provide innovative products and its related services for mainstream urban market focus on product leadership and customer intimacy.\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tTo preserve legacy market by providing consistent customer intimacy focus on operational excellence\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tTo develop budget skin-care product and service focus on affordable yet relevant offerings to sub-urban markets\n\t\t\t\t</li>\n\t\t\t\t</ul><h2>Company Values</h2>\n\t\t\t\t<p>\n\t\t\t\t\t<strong>HONEST (JUJUR)</strong><br /> The adjective Honest is perfect for describing someone who tells the truth. If you\'re always honest, it means you\'re truthful and sincere no matter what\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<strong>DISCIPLINE (DISIPLIN)</strong><br /> The noun Discipline is a system of rules of conduct or method of practice / or training to improve strength or self-control / or the trait of being well behaved. When you have discipline, you have self-control.\n\t\t\t\t\tWhen you discipline staff, you are either teaching them to be well-behaved, or you are punishing and correcting them. Discipline must start from ourselves.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<strong> RESPONSIBLE (BERTANGGUNG JAWAB)</strong><br /> The adjective Responsible is worthy of or requiring responsibility or trust; or held accountable. When you are a Responsible person, you will always doing things thoroughly, with effort to achieve\n\t\t\t\t\tthe maximum results.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<strong>TEAMWORK (KERJASAMA TIM)</strong><br /> The noun Teamwork is cooperative work done by a team. Each person plays their part to help achieve a larger goal. Often people refer to teamwork as a skill. When you work well in teams, you have great\n\t\t\t\t\tteamwork skills.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<strong>FOCUS ON CUSTOMERS (FOKUS PADA PELANGGAN)</strong><br /> Focus on customers can be noun or adjective, depend on sentences. Focus is all about finding a center, or the concentration of attention or energy on something. Something here means\n\t\t\t\t\tOUR CUSTOMER, as The Most Valuable asset of Klinik Estetika dr. Affandi, Instead of it\'s employee and all the legacy, which is the things inherited from the founder of the company.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<strong>SERVICE EXCELLENCE (KUALITAS PELAYANAN SEMPURNA)</strong><br /> The noun Service Excellence is the total maximum satisfaction performance of duties by our company member, refer to front end staff or back office management, standard of excellent\n\t\t\t\t\tservice to our external or internal customers. Something excellent is very good, great, or highest quality: this is one of the best compliments around. This is a strong word used mainly for things, people, and actions that are much better than average,\n\t\t\t\t\tthat\'s why we put this as one of our Company Value.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\n\n\t\t<!-- FAQ -->\n\t\t<!-- <div class="card faq">\n\t  <div class="item item-divider">\n\t  \tFAQ\n\t  </div>\n\t  <div class="item item-text-wrap">\n\n\t  \t<div class="start">\n\t  \t\t<p class="text-primary">\n\t\t\t  \tBerapa biaya perawatan di Klinik Estetika dr. Affandi ? Apakah pasien dikenakan biaya konsultasi?\n\t\t  \t</p>\n\t\t  \t<p>\n\t\t    \tBiaya perawatan di Klinik Estetika dr. Affandi bisa bervariasi, tergantung dari kondisi kulit, keluhan pasien, obat yang diresepkan Dokter serta jenis perawatan/tindakan yang dilakukan. Disarankan kepada pasien untuk berkonsultasi terlebih dahulu ke Dokter, sehingga Dokter bisa melakukan diagnosis dan menentukan terapi yang paling tepat. Pasien akan dikenakan biaya konsultasi saat konsultasi ke Dokter. Biaya konsultasi tersebut sudah termasuk biaya facial.\n\t\t  \t</p>\n\t  \t</div>\n\n\t  \t<div class="start">\n\t  \t\t<p class="text-primary">\n\t\t\t\tBagaimana caranya bila saya ingin tahu jadwal praktek Dokter di Klinik Estetika dr. Affandi?\n\t\t  \t</p>\n\t\t  \t<p>\n\t\t    \tBerhubung jadwal praktek Dokter berbeda-beda antar cabang maka silahkan langsung menghubungi cabang Klinik Estetika dr. Affandi yang hendak dikunjungi. Daftar lengkap alamat dan nomor telepon bisa dilihat di website pada bagian ”BRANCHES”.\n\t\t  \t</p>\n\t  \t</div>\n\n        <div class="start">\n            <p class="text-primary">\n                Saya ingin menggunakan produk perawatan dari Klinik Estetika dr. Affandi, tetapi tidak ada cabang Klinik Estetika di kota tempat saya tinggal. Bagaimana solusinya?\n            </p>\n            <p>\n                Pasien bisa konsultasi secara online melalui www.klinikestetika.com. Ada 2 cara untuk konsultasi online yaitu melalui ”LIVE VIDEO CONSULTATION” atau ”PHOTO CONSULTATION.\n            </p>\n        </div>\n\n        <div class="start">\n            <p class="text-primary">\n                Saya ingin menggunakan produk perawatan dari Klinik Estetika dr. Affandi, tetapi tidak ada cabang Klinik Estetika di kota tempat saya tinggal. Bagaimana solusinya?\n            </p>\n            <p>\n                Pasien bisa konsultasi secara online melalui www.klinikestetika.com. Ada 2 cara untuk konsultasi online yaitu melalui ”LIVE VIDEO CONSULTATION” atau ”PHOTO CONSULTATION.\n            </p>\n        </div>\n\n\t  </div> -->\n\t\t</div>\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/articles/detail.html", '<ion-view view-title="{{data.title}}" id="article">\n  <ion-content lazy-scroll>\n    <ion-refresher\n    pulling-text="Pull to refresh..."\n    on-refresh="refreshDetailArticle()">\n    </ion-refresher>\n\n\n<!-- Start Post Content -->\n    <div class="begin-post article">\n\n<!-- Thumbnail Image -->\n      <div class="thumbnail-article">\n          <img class="full-image" ng-show="isContainImage" image-lazy-src="{{data.image}}" image-lazy-loader="dots">\n      </div>\n\n<!-- Title Article -->\n      <div style="padding:5px 10px;">\n        <div class="title-article"><b>{{data.title}}</b></div>\n\n<!-- Meta Content -->\n        <div class="meta-article">\n          <span>\n            <i class="icon ion-calendar"></i> {{date}}\n          </span>\n          <span>\n            <i class="icon ion-ios-pricetag"></i> {{data.name}}\n          </span>\n        </div>\n\n<!-- Content -->\n        <hr>\n        <div ng-bind-html="hrefToJS(content)"></div>\n      </div>\n    </div>\n\n  </ion-content>\n</ion-view>\n'), 
        t.put("templates/articles/index.html", '<ion-view view-title="Artikel" id="article">\n\t<div class="bar bar-subheader item-input-inset">\n\t\t<label class="item-input-wrapper item-select">\n            <div class="input-label">\n                Kategori\n            </div>\n            <select ng-model="category" ng-options="a.id as a.name for a in categories" ng-change="categoryChange(category)">\n            </select>\n        </label>\n\t</div>\n\t<ion-content class="pd-t-40" lazy-scroll>\n\t\t<ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshArticle()">\n\t\t</ion-refresher>\n\t\t<!-- <div class="list">\n            <label class="item item-input item-select">\n                <div class="input-label">\n                    Kategori\n                </div>\n                <select ng-model="category" ng-options="a.id as a.name for a in categories" ng-change="categoryChange(category)"></select>\n            </label>\n        </div> -->\n\t\t<!-- <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshArticle()"></ion-refresher> -->\n\t\t<!-- Start Post Content -->\n\t\t<!-- <div class="row responsive-md" style="display: flex; flex-wrap:wrap"> -->\n\n\t\t<div class="row responsive-md articles-content">\n\t\t\t<!-- <div class="card item begin-post article" ng-repeat="article in articles" ui-sref="#app/article/detail/{{article.id}}/{{article.updated_at}}"> -->\n\n\t\t\t<div class="card begin-post article col col-33" ng-repeat="article in articles" ui-sref="app.article_detail({article_id: article.id, article_date: article.updated_at})">\n\t\t\t\t<div class="thumbnail-article">\n\t\t\t\t\t<img class="full-image" ng-show="article.isContainImage" image-lazy-src="{{article.image}}" image-lazy-loader="dots">\n\t\t\t\t</div>\n\t\t\t\t<div style="padding:5px 10px">\n\t\t\t\t\t<div class="title-article"><b>{{article.title}}</b></div>\n\t\t\t\t\t<!-- Meta Content -->\n\t\t\t\t\t<div class="meta-article">\n\t\t\t\t\t\t<span>\n                            <i class="icon ion-calendar"></i> {{article.updated_at}}\n                        </span>\n\t\t\t\t\t\t<span>\n                            <i class="icon ion-ios-pricetag"></i><span style="text-transform:capitalize">{{article.name}}</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Exce Content -->\n\t\t\t\t\t<div ng-bind-html="article.content" style="white-space:normal">...</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- </div> -->\n\t\t<!-- infinite scroll -->\n\t\t<ion-infinite-scroll ng-if="!theEnd" on-infinite="loadMore()" distance="1%">\n\t\t</ion-infinite-scroll>\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/branches/detail.html", '<ion-view id="branches" view-title="{{ branch.name }}">\n\t<ion-content>\n\t\t<div class="padding">\n\t\t\t<p>{{ branch.address }}</p>\n\t\t\t<a class="button button-block button-light" ng-click="showMaps(branch)">\n\t\t\t\t<i class="icon ion-ios-location"></i> See on Map\n\t\t\t</a>\n\t\t\t<!-- <a href="tel:{{ branch.phone }}" class="button button-block button-positive"> -->\n\t\t\t<a href="#" class="button button-block button-positive" ng-click="callNumber(branch.phone)">\n\t\t\t\t<i class="icon ion-ios-telephone"></i> {{ branch.phone }}\n\t\t\t</a>\n\t\t</div>\n\t\t<ion-gallery ion-gallery-items="branch_images"></ion-gallery>\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/branches/index.html", '<ion-view id="branches" view-title="Cabang">\n\t<ion-content>\n\t\t<div class="row responsive-md branches-content" style="-webkit-box-align: end;align-items: flex-end;">\n\t\t\t<div class="list card col col-25" ng-repeat="branch in branches" ui-sref="app.branchDetail({branch_id: branch.id})">\n\t\t\t\t<!-- <a href="#/app/branch/detail/{{ branch.id }}" class="item item-text-wrap"> -->\n\t\t\t\t<div class="item item-text-wrap">\n          <h2>{{ branch.name }}</h2>\n\t\t\t\t\t<p>{{ branch.address }}</p>\n\t\t\t\t</div>\n\t\t\t\t<!-- </a> -->\n\t\t\t\t<a href="#" class="item item-divider item-icon-left positive" ng-click="callNumber($event, branch.phone)">\n\t\t\t\t\t<i class="icon ion-ios-telephone"></i> {{ branch.phone }}\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t</div>\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/contact-us/index.html", '<ion-view cache-view="false" view-title="Hubungi Kami">\n\t<ion-content>\n        <form id="contact-us-form" name="cuform" novalidate>\n            <ion-list>\n                <label class="item item-input item-stacked-label">\n                    <span class="input-label">Nama Lengkap <span class="assertive">*</span></span>\n                    <input type="text" ng-model="contactUsData.name" name="fullName" required="">\n                    <div ng-show="cuform.$submitted || cuform.fullName.$touched">\n                      <div class="assertive" ng-show="cuform.fullName.$error.required">Mohon isi Nama Lengkap Anda.</div>\n                    </div>\n                </label>\n                <label class="item item-input item-stacked-label">\n                    <span class="input-label">Email<span style="color:red">*</span></span>\n                    <input type="email" ng-model="contactUsData.email"name="email" required>\n                    <div ng-show="cuform.$submitted || cuform.email.$touched">\n                      <div class="assertive" ng-show="cuform.email.$error.required">Mohon isi alamat Email Anda.</div>\n                      <div class="assertive" ng-show="cuform.email.$error.email">Mohon isi alamat Email Anda yang valid.</div>\n                    </div>\n                </label>\n                <label class="item item-input item-stacked-label">\n                    <span class="input-label">Judul <span class="assertive">*</span></span>\n                    <input type="text" ng-model="contactUsData.subject" name="subject" required="">\n                    <div ng-show="cuform.$submitted || cuform.subject.$touched">\n                      <div class="assertive" ng-show="cuform.subject.$error.required">Mohon isi Judul.</div>\n                    </div>\n                </label>\n                <label class="item item-input item-stacked-label">\n                    <span class="input-label">Pesan <span class="assertive">*</span></span>\n                    <textarea msd-elastic="\\n" ng-model="contactUsData.message" name="message" ng-minlength="50" required=""></textarea>\n                    <div ng-show="cuform.$submitted || cuform.message.$touched">\n                      <div class="assertive" ng-show="cuform.message.$error.required">Mohon isi pesan Anda.</div>\n                      <div class="assertive" ng-show="cuform.message.$error.minlength">your message should be 50 words minimal.</div>\n                    </div>\n                </label>\n            </ion-list>\n            <div class="row">\n                <button type="submit" ng-click="submitMessage()" class="button button-balanced button-block">Submit</button>\n            </div>\n        </form>\n    </ion-content>\n</ion-view>\n'), 
        t.put("templates/modal/confirmation_vote.html", '<ion-modal-view id="confirmation">\n\n\n    <ion-header-bar>\n        <div class="buttons">\n            <button class="button button-clear" ng-click="closeConfirmation()">\n                <i class="icon ion-ios-close-empty"></i>\n            </button>\n            <h1 class="title">KONFIRMASI</h1>\n        </div>\n    </ion-header-bar>\n\n    <ion-content>\n\n\n        <form ng-submit="doLogin()">\n            <div class="list">\n                <label class="item item-input item-floating-label">\n                    <span class="input-label">Email</span>\n                    <input type="text" ng-model="loginData.email" placeholder="Email">\n                </label>\n                <label class="item item-input item-floating-label">\n                    <span class="input-label">Password</span>\n                    <input type="password" ng-model="loginData.password" placeholder="Password">\n                </label>\n            </div>\n            <div class="padding">\n                <button class="button button-outline button-block button-positive" type="submit">Log in</button>\n            </div>\n        </form>\n        \n        <div style="text-align:center">\n            Belum punya akun? <a class="positive" ng-href="#" ng-click="register()">Register Here</a>\n        </div>\n                \n\n\n    </ion-content>\n</ion-modal-view>'), 
        t.put("templates/orders/detail.html", '<ion-view view-title="Order Details" id="orders">\n  <ion-content>\n <ion-refresher\n    pulling-text="Pull to refresh..."\n    on-refresh="refreshDetailOrder()">\n  </ion-refresher>\n<!-- \t<style>\n\ttable.striped, table.basic {width: 100%}\n\ttable.striped tr, table.basic tr {border-bottom:1px solid #ccc;}\n\ttable.striped tr td, table.basic tr td {padding:5px;}\n\ttable.striped tr:nth-child(even) {background-color: #f2f2f2}\n\t</style> -->\n\t<div class="orders-detail padding">\n\t\t<div class="orders-detail-start margin-50">\n\t\t\t<h4>Informasi Pengiriman</h4>\n\t\t\t<table class="striped">\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Faktur</td>\n\t\t\t\t\t<td>#{{data.order_no}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Status</td>\n\t\t\t\t\t<td>{{data.status}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Alamat Pengiriman</td>\n\t\t\t\t\t<td>{{data.shipping_address}}, {{data.city_name}}, {{data.province_name}} {{data.shipping_postal_code}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Tanggal</td>\n\t\t\t\t\t<td>{{data.created_at}}</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div class="">\n\t\t\t<h4>Informasi Produk</h4>\n\t\t\t<div class="list">\n\t\t\t\t<div class="item item-avatar" ng-repeat="product in products">\n\t\t\t\t\t<img src="{{product.image}}">\n<!-- \t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col col-80"> -->\n\t\t\t\t\t\t\t<h2 style="white-space:normal"><b>{{product.title}}</b></h2>\n\t\t\t\t\t\t\t<p class="subdued">{{product.qty}} buah</p>\n\t\t\t\t\t\t\t<p class="subdued">{{product.price}}/buah</p>\n<!-- \t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col col-20"> -->\n\t\t\t\t\t\t\t<h2 class="subdued pull-right"><b>{{product.totalPrice}}</b></h2>\n\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <table class="basic">\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan="2">Produk</td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td>Total</td>\n\t\t\t\t</tr>\n\n\n\t\t\t\t<tr ng-repeat="product in products">\n\t\t\t\t\t<td colspan="2" style="vertical-align:middle">\n\t\t\t\t\t\t<img ng-src="{{product.image}}" alt="" style="height:50px">\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style="vertical-align:middle">\n\t\t\t\t\t\t<b>{{product.title}}</b><br>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\tQ: <b>{{product.qty}}</b>/\n\t\t\t\t\t\t\tS: <b>{{product.size}}</b>/\n\t\t\t\t\t\t\tP: <b>{{product.price}}</b>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td style="vertical-align:middle">{{product.totalPrice}}</td>\n\t\t\t\t</tr>\n\n\t\t\t</table> -->\n\n\t\t\t<table class="striped">\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Berat</td>\n\t\t\t\t\t<td><span class="pull-right">{{data.total_weight}} Kg</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Sub Total</td>\n\t\t\t\t\t<td>Rp <span class="pull-right">{{data.subtotal}}</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Biaya Pengiriman</td>\n\t\t\t\t\t<td>Rp <span class="pull-right">{{data.shipping_price}}</span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style="font-weight:bold">\n\t\t\t\t\t<td>Total</td>\n\t\t\t\t\t<td>Rp <span class="pull-right">{{data.total_price}}</span></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\n\n\n  </ion-content>\n  <div ng-show="data.status == \'MENUNGGU PEMBAYARAN\'" class="bar bar-footer">\n\t\t<button class="button button-balanced button-block" ui-sref="app.orders_payment({\'token\': data.random_token})">\n\t\t\t<div class="title">\n\t\t\t\tBayar Sekarang\n\t\t\t</div>\n\t\t</button>\n\t</div>\n</ion-view>\n<!-- <div ng-show="data.status == \'MENUNGGU PEMBAYARAN\'" class="bar bar-footer">\n\t<button style="margin: 0px" class="button button-balanced button-block" ui-sref="app.orders_payment({\'order_no\':\'{{data.order_no}}\'})">\n\t\t<div class="title" style="top:-7px"></div>\n\t\tBayar Sekarang\n\t</button>\n</div> -->\n'), 
        t.put("templates/orders/index.html", '<ion-view view-title="Pesanan Saya" id="orders">\n  <ion-content>\n   <ion-refresher\n    pulling-text="Pull to refresh..."\n    on-refresh="refreshOrders()">\n  </ion-refresher>\n\t<!-- fetching rows is null -->\n\t<div class="padding" ng-if="total == 0 && is_loading == 0">\n\t\t<div class="panel-assertive">\n\t\t\t<h5>\n\t\t\t\tHalo {{full_name}}, Anda belum memulai apapun. Silahkan\n\t\t\t\tmulai berbelanja dengan menekan tombol dibawah ini\t\n\t\t\t</h5>\n\t\t\t<div class="button button-small button-block button-positive" href="#/app.product">\n\t\t\t\tBelanja\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<ion-list class="orders-order">\n\t\t  \t<ion-item ng-repeat="order in orders" ui-sref="app.orders_detail({\'order_no\':\'{{order.order_no}}\'})">\n\t\t\t\t<div class="row orders-item">\n\t\t\t\t\t<div class="col col-75">\n\t\t\t\t\t\t<h2>#{{order.order_no}}</h2>\n\t\t\t\t\t\t<p><i class="ion-ios-calendar"></i> {{order.created_at}}</p>\n\t\t\t\t\t\t<p class="text-assertive" ng-if="order.status == \'DIBATALKAN\'">{{order.status}}</p>\n\t\t\t\t\t\t<p class="text-energized" ng-if="order.status == \'BELUM DITERIMA\'">{{order.status}}</p>\n\t\t\t\t\t\t<p class="text-balanced" ng-if="order.status == \'MENUNGGU PEMBAYARAN\'">{{order.status}}</p>\n\t\t\t\t\t</div>\n\t\n\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t<div class="price"><b>{{order.total_price}}</b></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class="ion-ios-arrow-right arrow"></i>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\t</ion-list>\n\t<ion-infinite-scroll ng-if="!theEnd" on-infinite="loadMore()" distance="1%">\n  \t</ion-infinite-scroll>\n  </ion-content>\n</ion-view>'), 
        t.put("templates/orders/payment.html", '<ion-view view-title="Pembayaran" id="orders" >\n\t<ion-content id="orders-content">\n\t\t<div class="card">\n\t\t\t<div ng-click="openDokuModal()" class="item item-text-wrap">\n\t\t\t<!-- <div ng-click="openDokuModal()" class="item item-avatar item-text-wrap"> -->\n\t\t\t\t<!-- <img src="https://www.doku.com/themes/default/images/logo.png"> -->\n\t\t\t\t<h2>Doku</h2>\n\t\t\t\t<p><img src="https://klinikestetika.com/images/logo-doku.png"></p><p>Untuk pembayaran menggunakan kartu kredit, bank transfer, minimarket, atau Doku Wallet.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="card">\n\t\t\t<a ng-click="openClickpayModal()" class="item item-text-wrap">\n\t\t\t\t<h2>My ShortCart</h2>\n\t\t\t\t<p><img src="https://klinikestetika.com/images/msc-logo.png"></p><p><p>untuk pembayaran menggunakan Payment with Doku Wallet.</p>\n\t\t\t</a>\n\t\t</div>\n\t\t<!-- <div class="card">\n\t\t\t<a ng-click="openExternal(dokuUrl, \'_blank\')" class="item item-text-wrap" target="_system">\n\t\t\t\t<h2>Doku</h2>\n\t\t\t\t<p>untuk pembayaran menggunakan kartu kredit, bank transfer, minimarket, atau Doku Wallet.</p>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class="card">\n\t\t\t<a ng-click="openExternal(shortcart, \'_blank\')" class="item item-text-wrap" target="_system">\n\t\t\t\t<h2>My ShortCart</h2>\n\t\t\t\t<p>untuk pembayaran menggunakan BCA KlikPay.</p>\n\t\t\t</a>\n\t\t</div> -->\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/payments/bca-clickpay.html", '<ion-modal-view>\n  <ion-header-bar class="bar bar-calm">\n    <div class="buttons">\n      <button class="button button-clear" ng-click="closeClickpayModal()">\n        <i class="icon ion-ios-close-empty"></i>\n      </button>\n    </div>\n    <h1 class="title">Payment with BCA ClickPay</h1>\n  </ion-header-bar>\n  <ion-content id="bca-clickpay-content">\n    <div ng-style="iframeWrapperStyle">\n      <iframe ng-src="{{shortcartUrl}}" frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </ion-content>\n</ion-modal-view>\n'), 
        t.put("templates/payments/doku.html", '<ion-modal-view>\n  <ion-header-bar class="bar bar-calm">\n    <div class="buttons">\n      <button class="button button-clear" ng-click="closeDokuModal()">\n        <i class="icon ion-ios-close-empty"></i>\n      </button>\n    </div>\n    <h1 class="title">Payment with Doku</h1>\n  </ion-header-bar>\n  <ion-content id="doku-content">\n    <div ng-style="iframeWrapperStyle">\n      <iframe ng-src="{{dokuUrl}}" frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </ion-content>\n</ion-modal-view>\n'), 
        t.put("templates/photos/consultation_page1.html", '<!-- <ion-view view-title="Konsultasi" id="consultation" ng-controller="consultation_page1"> -->\n<ion-view cache-view="false" view-title="Konsultasi" ng-controller="consultation_page1">\n  <ion-content>\n\n\t<form id="photo-consult-form" name="photoform" novalidate>\n\t\t<ion-list>\n\t\t\t<ion-item class="item-divider">\n\t\t\t\tApa jenis kulit Anda? <span class="assertive">*</span> <span ng-show="photoform.$submitted && photoform.jenisKulit.$error.required" class="assertive">(harap diisi)</span>\n\t\t\t</ion-item>\n\t\t\t<ion-radio name="jenisKulit" ng-model="consultation.jenisKulit" ng-repeat="item in jenisKulit" ng-value="\'{{item}}\'" ng-required="true">{{item}}</ion-radio>\n\t\t\t<br />\n\t\t\t<ion-toggle\n\t\t\t\ttoggle-class="toggle-calm"\n\t\t\t\tng-model="consultation.jerawat"\n\t\t\t\tng-true-value="\'{{jerawat[0]}}\'"\n\t\t\t\tng-false-value="\'{{jerawat[1]}}\'"\n\t\t\t\tng-checked="false" required>Ada jerawat di wajah</ion-toggle>\n\t\t\t<ion-toggle toggle-class="toggle-calm"\n\t\t\t\tng-model="consultation.flek"\n\t\t\t\tng-true-value="\'{{flek[0]}}\'"\n\t\t\t\tng-false-value="\'{{flek[1]}}\'"\n\t\t\t\tng-checked="false" required>Ada flek hitam/coklat</ion-toggle>\n\t\t\t<ion-toggle toggle-class="toggle-calm"\n\t\t\t\tng-model="consultation.riwayatPenyakit"\n\t\t\t\tng-true-value="\'{{riwayatPenyakit[0]}}\'"\n\t\t\t\tng-false-value="\'{{riwayatPenyakit[1]}}\'"\n\t\t\t\tng-checked="false" required>Ada riwayat sakit maag</ion-toggle>\n\t\t\t<ion-toggle toggle-class="toggle-calm"\n\t\t\t\tng-model="consultation.alergiObatOles"\n\t\t\t\tng-true-value="\'{{alergiObatOles[0]}}\'"\n\t\t\t\tng-false-value="\'{{alergiObatOles[1]}}\'"\n\t\t\t\tng-change="checkChoice(consultation.alergiObatOles)"\n\t\t\t\tng-checked="false" required>Alergi obat oles kulit</ion-toggle>\n\t\t\t<div ng-show="checkChoice(consultation.alergiObatOles)">\n\t\t\t\t<ion-item class="item-divider">\n\t\t\t\t\tJenis obat oles <span ng-show="photoform.isiAlergiObatOles.$error.required && checkChoice(consultation.alergiObatOles)" class="assertive">(harap diisi)</span>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-input class="item item-input item-floating-label">\n\t\t\t\t\t<textarea name="isiAlergiObatOles" type="text" ng-model="consultation.isiAlergiObatOles" ng-required="checkChoice(consultation.alergiObatOles)"></textarea>\n\t\t\t\t</ion-input>\n\t\t\t\t<br />\n\t\t\t</div>\n\t\t\t<ion-toggle toggle-class="toggle-calm"\n\t\t\t\tng-model="consultation.alergiObatCair"\n\t\t\t\tng-true-value="\'{{alergiObatCair[0]}}\'"\n\t\t\t\tng-false-value="\'{{alergiObatCair[1]}}\'"\n\t\t\t\tng-change="checkChoice(consultation.alergiObatCair)"\n\t\t\t\tng-checked="false" required>Alergi obat cair</ion-toggle>\n\t\t\t<div ng-show="checkChoice(consultation.alergiObatCair)">\n\t\t\t\t<ion-item class="item-divider">\n\t\t\t\t\tJenis obat cair <span ng-show="photoform.isiAlergiObatCair.$error.required && checkChoice(consultation.alergiObatCair)" class="assertive">(harap diisi)</span>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-input class="item item-input item-floating-label">\n\t\t\t\t\t<textarea name="isiAlergiObatCair" type="text" ng-model="consultation.isiAlergiObatCair" ng-required="checkChoice(consultation.alergiObatCair)"></textarea>\n\t\t\t\t</ion-input>\n\t\t\t\t<br />\n\t\t\t</div>\n\t\t\t<div ng-show="jenKel == \'P\'">\n\t\t\t\t<br ng-hide="checkChoice(consultation.alergiObatCair)" />\n\t\t\t\t<ion-item class="item-divider">\n\t\t\t\t\tStatus kehamilan dan menstruasi <span class="assertive">*</span> <span ng-show="photoform.$submitted && photoform.khususwanita.$error.required && jenKel == \'P\'" class="assertive">(harap diisi)</span>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-radio name="khususwanita" ng-model="consultation.khususWanita" ng-repeat="item in khususWanita" ng-value="\'{{item}}\'" ng-required="jenKel == \'P\'">{{item}}</ion-radio>\n\t\t\t\t<br />\n\t\t\t</div>\n\t\t\t<ion-item class="item-divider">Tuliskan keluhan Anda di sini</ion-item>\n\t\t\t<ion-input class="item item-input item-floating-label">\n\t\t\t\t<textarea type="text" ng-model="consultation.keluhan" placeholder="contoh: jerawat dimana-mana"></textarea>\n\t\t\t</ion-input>\n\t\t\t<br />\n\t\t</ion-list>\n  \t   <div class="row button-consult">\n         <button type="submit" class="button button-block button-balanced" ng-click="confirmation()">\n           Next <i class="icon ion-arrow-right-c"></i>\n         </button>\n       </div>\n\t</form>\n\t<!-- <div class="row button-consult">\n         <button class="button button-block button-balanced" ng-click="confirmation()">\n           Next <i class="icon ion-arrow-right-c"></i>\n         </button>\n       </div> -->\n  </ion-content>\n</ion-view>\n'),
        t.put("templates/photos/consultation_page2.html", '<ion-view cache-view="false" view-title="Photos" ng-controller="consultation_page2">\n  <ion-content>\n  \t<div class="card">\n  \t\t<div class="item item-icon-left item-text-wrap calm-bg light ">\n\t\t\t<i class="icon ion-ios-information-outline"></i> Klik icon untuk mengunggah foto\n\t\t</div>\n  \t</div>\n  \t<div class="list">\n\t  <div class="item">\n\t    Foto Wajah Tampak Depan <span class="assertive">*</span>\n\t  </div>\n\t  <div class="item item-text-wrap" style="border-top:none;padding-top:0">\n\t  \t  <div class="row responsive-sm">\n\t\t\t<div class="col">\n\t\t  \t\t<!-- <img class="col-50" id="consultationPicture1" ng-src="images/user-default.png"> -->\n\t\t  \t\t<img id="consultationPicture1" class="full-image" ng-src="images/user-default.png" ng-click="getConsultationPicture(1)">\n\t\t  \t</div>\n\n\t\t\t<!-- <label class="item">\n\t\t\t     <button class="button button-block button-positive" ng-click="getConsultationPicture(1)">Tambah Gambar</button>\n\t\t\t</label> -->\n\n\t\t  </div>\n\t  </div>\n  \t  <div class="item">\n\t    Foto Wajah Tampak Kiri <span class="assertive">*</span>\n\t  </div>\n\t  <div class="item item-text-wrap" style="border-top:none;padding-top:0">\n\t  \t  <div class="row responsive-sm">\n\t\t\t<div class="col">\n\t\t  \t\t<!-- <img class="col-50" id="consultationPicture2" ng-src="images/user-default.png"> -->\n\t\t  \t\t<img class="full-image" id="consultationPicture2" ng-src="images/user-default.png" ng-click="getConsultationPicture(2)">\n\t\t  \t</div>\n\n\t\t\t<!-- <label class="item">\n\t\t\t     <button class="button button-block button-positive" ng-click="getConsultationPicture(2)">Tambah Gambar</button>\n\t\t\t</label> -->\n\n\t\t  </div>\n\t  </div>\n\t  <div class="item">\n\t    Foto Wajah Tampak Kanan <span class="assertive">*</span>\n\t  </div>\n\t  <div class="item item-text-wrap" style="border-top:none;padding-top:0">\n\t  \t  <div class="row responsive-sm">\n\t\t\t<div class="col">\n\t\t  \t\t<!-- <img class="col-50" id="consultationPicture3" ng-src="images/user-default.png"> -->\n\t\t  \t\t<img class="full-image" id="consultationPicture3" ng-src="images/user-default.png" ng-click="getConsultationPicture(3)">\n\t\t  \t</div>\n\n\t\t\t<!-- <label class="item">\n\t\t\t     <button class="button button-block button-positive" ng-click="getConsultationPicture(3)">Tambah Gambar</button>\n\t\t\t</label> -->\n\n\t\t  </div>\n\t  </div>\n\t  <div class="item">\n\t    Foto Keluhan Lain (Jika Ada)\n\t  </div>\n\t  <div class="item item-text-wrap" style="border-top:none;padding-top:0">\n\t  \t  <div class="row responsive-sm">\n\t\t\t<div class="col">\n\t\t  \t\t<!-- <img class="col-50" id="consultationPicture4" ng-src="images/user-default.png"> -->\n\t\t  \t\t<img class="full-image" id="consultationPicture4" ng-src="images/user-default.png" ng-click="getConsultationPicture(4)">\n\t\t  \t</div>\n\n\t\t\t<!-- <label class="item">\n\t\t\t     <button class="button button-block button-positive" ng-click="getConsultationPicture(4)">Tambah Gambar</button>\n\t\t\t</label> -->\n\n\t\t  </div>\n\t  </div>\n\t  <div class="row">\n\t  \t<button class="button button-block button-positive" ng-click="finishConsultation()">Selesai</button>\n\t  </div>\n\t</div>\n\n  </ion-content>\n</ion-view>\n'), 
        t.put("templates/photos/detail.html", '<ion-view view-title="Consultation History">\n    <ion-content>\n        <ion-list>\n            <label class="item item-input" ng-hide="photoDetails.skin_type == \'\'">\n                <span class="input-label">Jenis kulit</span>\n                <input type="text" ng-disabled="true" value="{{photoDetails.skin_type}}">\n            </label>\n            <ion-toggle toggle-class="toggle-calm"\n                ng-model="photoDetails.has_acne"\n                ng-true-value="1"\n                ng-false-value="0"\n                ng-disabled="true">Ada jerawat di wajah</ion-toggle>\n            <ion-toggle toggle-class="toggle-calm"\n                ng-model="photoDetails.has_black_spots"\n                ng-true-value="1"\n                ng-false-value="0"\n                ng-disabled="true">Ada flek hitam/coklat</ion-toggle>\n            <ion-toggle toggle-class="toggle-calm"\n                ng-model="photoDetails.is_gastritis"\n                ng-true-value="1"\n                ng-false-value="0"\n                ng-disabled="true">Ada riwayat sakit maag</ion-toggle>\n            <ion-toggle toggle-class="toggle-calm"\n                ng-model="photoDetails.is_topical_drug_allergy"\n                ng-true-value="1"\n                ng-false-value="0"\n                ng-disabled="true">Alergi obat oles kulit</ion-toggle>\n            <ion-toggle toggle-class="toggle-calm"\n                ng-model="photoDetails.is_oral_drug_allergy"\n                ng-true-value="1"\n                ng-false-value="0"\n                ng-disabled="true">Alergi obat cair</ion-toggle>\n            <label class="item item-input" ng-hide="photoDetails.menstrual_cycle == \'\'">\n                <span class="input-label">Siklus menstruasi</span>\n                <input type="text" ng-disabled="true" value="{{photoDetails.menstrual_cycle}}">\n            </label>\n        </ion-list>\n        <div class="card" ng-show="photoDetails.complaint">\n          <div class="item">\n            Komplain\n          </div>\n          <div class="item item-text-wrap" style="border: none">\n            <p>{{photoDetails.complaint}}</p>\n          </div>\n        </div>\n        <div class="list card" ng-repeat="image in photoDetails.consultation_images" ng-show="image.image">\n          <div class="item">{{image.image_type.replace(\'_\', \' \').toUpperCase()}}</div>\n          <div class="item item-image">\n            <img ng-src="https://klinikestetika.com/{{image.image}}" style="width:100%" />\n          </div>\n        </div>\n    </ion-content>\n</ion-view>\n'), 
        t.put("templates/photos/index.html", '<ion-view cache-view="false" view-title="Konsultasi Foto" id="consultation">\n\t<ion-content lazy-scroll>\n\n\t\t<div class="list mg-b-0" ng-if="!consultationData" ng-repeat="consultation in consultations">\n\n\t\t\t<div class="item item-text-wrap ng-class:{\'item-thumbnail-left\': consultation.image, \'item-button-right\': consultation.status == \'Tersedia\'}"\n\t\t\t\tng-if="consultation.type == \'photo\'" ui-sref="app.photo_detail({id:consultation.id})">\n\n\t\t\t\t<img ng-show="consultation.image" image-lazy-src="{{consultation.image}}" image-lazy-loader="dots">\n\t\t\t\t<h2>{{consultation.status}}</h2>\n\t\t\t\t<p>{{consultation.updated_at}}</p>\n\t\t\t\t<p style="text-transform:capitalize">{{consultation.type}} consultation</p>\n\t\t\t\t<button ng-if="consultation.status == \'Tersedia\'" ng-click="buyPrescription($event,consultation.id)" class="button button-calm button-stable">\n          Beli\n        </button>\n\t\t\t</div>\n\n\t\t\t<div class="item item-text-wrap ng-class:{\'item-button-right\': consultation.status == \'Tersedia\'}" ng-if="consultation.type == \'video\'">\n\n\t\t\t\t<h2 style="text-transform:capitalize">{{consultation.status}}</h2>\n\t\t\t\t<p>{{consultation.updated_at}}</p>\n\t\t\t\t<p style="text-style="width: 100%;"capitalize">{{consultation.type}} consultation</p>\n\t\t\t\t<div style="clear:both"></div>\n\t\t\t\t<button ng-if="consultation.status == \'Tersedia\'" ng-click="buyPrescription($event,consultation.id)" class="button button-calm button-stable">\n          Beli\n        </button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div ng-if="consultationData">\n\t\t</div>\n\n\t</ion-content>\n\t<div class="bar bar-footer">\n\t\t<button class="button button-balanced button-block" ui-sref="app.photo_consultation_page_1">\n        <i class="icon ion-plus-circled"></i> Konsultasi\n      </button>\n\t</div>\n</ion-view>\n'), 
        t.put("templates/photos/page1_confirmation.html", '<ion-modal-view id="login">\n\n\n    <ion-header-bar class="bar bar-calm">\n        <div class="buttons">\n            <button class="button button-clear" ng-click="closeConfirmation()">\n                <i class="icon ion-ios-close-empty"></i>\n            </button>\n            <h1 class="title">Konfirmasi</h1>\n        </div>\n    </ion-header-bar>\n\n    <ion-content>\n\n\n        <form ng-submit="CheckPilihan()">\n            <div class="list">\n                <p>Apakah Anda Yakin?</p>\n            </div>\n            <div class="padding">\n                <button class="button button-outline-black button-block" type="submit">Ya</button>\n            </div>\n             <div class="padding">\n                <a class="button button-outline-black button-block" ng-click="closeConfirmation()">Tidak</a>\n            </div>\n        </form>\n        \n        \n                \n\n\n    </ion-content>\n</ion-modal-view>'), 
        t.put("templates/photos/question-consultation.html", '\n<script>\nangular.module(\'starter\', [\'ionic\', \'ionic-modal-select\'])\n.controller(\'MainCtrl\', [\'$scope\', function ($scope) {\n  $scope.selectables = [\n    1, 2, 3\n  ];\n</script>\n<div id="consultation" ng-app="starter" ng-controller="MainCtrl">\n\n\t<div class="card">\n\t  <div class="item item-divider" modal-select="" ng-model="someModel" options="selectables" modal-title="Select a number">\n\t\tApa jenis kulit Anda ?\n\t  </div>\n\t  <div class="option">\n   \t\t  {{option}}\n\t   </div>\n\t  <div class="item item-text-wrap">\n\t\tJawaban: {{someModel}}\n\t  </div>\n\t</div>\n\t\n</div>'), 
        t.put("templates/products/detail.html", '<ion-view view-title="{{data.title}}" id="product-details">\n    <ion-content>\n    <ion-refresher\n    pulling-text="Pull to refresh..."\n    on-refresh="refreshDetailProduct()">\n  </ion-refresher>\n\n        <!-- Start content -->\n        <div class="begin-post product">\n            <div class="thumbnail">\n                <img class="full-image" ng-src="https://klinikestetika.com{{data.image}}" alt="{{data.title}}">\n\n<!-- Shade -->\n                <div class="shade"></div>\n\n\n<!-- Title -->\n                <div class="title-product"><h2>{{data.title}}</h2></div>\n            </div>\n\n\n<!-- Peringatan -->\n            <div ng-show="data.is_otc == 0" class="card">\n                <div class="item item-icon-left item-text-wrap assertive-bg light">\n                    <i class="icon ion-alert-circled"></i> Pembelian produk ini menggunakan resep dokter.\n                </div>\n            </div>\n\n\n<!-- Fungsi -->\n            <div class="card">\n                <div class="item item-icon-left">\n                    <i class="icon ion-information-circled"></i>Fungsi\n                </div>\n                <div class="item item-text-wrap no-border">\n                    <p>{{data.Fungsi}}</p>\n                </div>\n            </div>\n\n\n<!-- How To -->\n            <div class="card" ng-show="data.CaraPakai">\n                <div class="item item-icon-left">\n                    <i class="icon ion-clipboard"></i> Cara Pakai\n                </div>\n                <div class="item item-text-wrap no-border">\n                    <p>{{data.CaraPakai}}</p>\n                </div>\n            </div>\n\n\n\n<!-- Pricing Tables -->\n            <div class="pricing">\n                <div class="row">\n                    <div class="col">Ukuran</div>\n                    <div class="col">Netto</div>\n                    <div class="col">Harga</div>\n                </div>\n\n                <div class="row">\n                    <div class="col">{{data.prices1size}}</div>\n                    <div class="col">{{data.prices1netto}}</div>\n                    <div class="col">{{data.prices1price}}</div>\n                </div>\n\n                <div ng-if="data.prices2size" class="row">\n                    <div class="col">{{data.prices2size}}</div>\n                    <div class="col">{{data.prices2netto}}</div>\n                    <div class="col">{{data.prices2price}}</div>\n                </div>\n            </div>\n        </div>\n\n    </ion-content>\n    <div class="bar bar-footer">\n        <!-- Button Cart -->\n        <button ng-click="addNewCartItem(data.id)" class="button button-balanced button-block">\n            <div class="title">Beli Sekarang</div>\n        </button>\n    </div>\n\n</ion-view>\n'), 
        t.put("templates/products/index.html", '<ion-view view-title="Produk" id="products">\n\t<ion-nav-buttons side="right">\n\t\t<button class="button button-icon icon ion-ios-search-strong" ng-click="showFilterBar()"></button>\n\t</ion-nav-buttons>\n\t<div class="bar bar-subheader item-input-inset" ng-hide="states.searched">\n\t\t<label class="item-input-wrapper item-select">\n            <div class="input-label">\n                Kategori\n            </div>\n            <select ng-model="category" ng-options="a.id as a.name for a in categories" ng-change="categoryChange(category)">\n            </select>\n        </label>\n\t</div>\n\t<ion-content ng-class="{\'pd-t-40\': !states.searched}" lazy-scroll>\n\t\t<ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshProduct()">\n\t\t</ion-refresher>\n\t\t<!-- <div class="list category">\n        <label class="item item-input item-select">\n            <div class="input-label">\n                Kategori\n            </div>\n            <select ng-model="category" ng-options="a.id as a.name for a in categories" ng-change="categoryChange(category)">\n            </select>\n        </label>\n    </div> -->\n\n\t\t<ion-list class="row responsive-md">\n\t\t\t<!-- <ion-item ng-repeat="product in products | orderBy:\'-is_otc\'" href="#/app/product/detail/{{product.id}}" class="begin-product"> -->\n\t\t\t<ion-item ng-repeat="product in products" href="#/app/product/detail/{{product.id}}" class="begin-product col col-25">\n\t\t\t\t<div class="thumbnail-product">\n\t\t\t\t\t<img ng-if="product.is_otc == 0" ng-src="images/ribon.png" alt="" class="ribbon">\n\t\t\t\t\t<img class="product-image-thumb" image-lazy-src="https://klinikestetika.com/{{product.image}}" image-lazy-loader="dots">\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="meta-product">\n\t\t\t\t\t<b>{{ product.title }}</b>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\n\t\t<div ng-if="(!products.length && states.searched) || loading" class="no-results">\n\t\t\t<!-- <div ng-hide="!products.length && states.searched || loading" class="no-results"> -->\n\t\t\t<p class="mg-t-40 text-center">No Results for <strong>{{filterText}}</strong></p>\n\t\t</div>\n\t\t<ion-infinite-scroll ng-if="!theEnd" on-infinite="loadMore()" distance="1%"></ion-infinite-scroll>\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/services/index.html", '<ion-view view-title="Service" id="service">\n<ion-pane>\n\t<ion-tabs class="tabs-positive tabs-estetika tabs-top">\n\t\t<ion-tab title="Kulit">\n\t  \t\t<ion-content lazy-scroll>\n\t  \t\t\t<div class="row responsive-md services-content">\n\n\t\t\t\t<div class="list card spa-post col col-33" ng-repeat="kulit in kulits" ui-sref="app.serviceKulitDetail({\'service_id\':\'{{kulit.id}}\'})" ng-hide="kulit.description == \'\'">\n\t\t\t\t\t\t<div class="item item-image">\n\t\t\t\t\t\t\t<img image-lazy-src="https://klinikestetika.com/{{kulit.image}}" ng-hide="kulit.image == \'\'" image-lazy-loader="dots">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="item item-body">\n\t\t\t\t\t\t\t<h2 class="title">{{kulit.name}}</h2>\n\t\t\t\t\t\t\t<p ng-bind-html="kulit.description | limitTo:100" style="white-space:normal" ng-hide="kulit.description == \'\'">...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t  \t\t\t</div>\n\t\t\t</ion-content>\n\t\t</ion-tab>\n\n\t\t<ion-tab title="SPA">\n\t  \t\t<ion-content>\n\n\n<!-- \t\t\t\t<div ng-repeat="spa in spas">\n\t\t\t\t\t<div class="list card spa-post"  ng-if="spa.description !== \'\'" ui-sref="app.serviceSpaDetail({\'service_id\':\'{{spa.id}}\'})">\n\t\t\t\t\t<div class="list card spa-post" ui-sref="app.serviceSpaDetail({\'service_id\':\'{{spa.id}}\'})">\n\t\t\t\t\t  <div class="item item-body">\n\t\t\t\t\t    <img class="full-image" ng-src="https://klinikestetika.com/{{spa.image}}">\n\t\t\t\t\t    <p class="title">{{spa.name}}</p>\n\t\t\t\t\t     <div ng-bind-html="spa.description | limitTo:250" style="white-space:normal">...</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="list card spa-post"  ng-if="spa.description == \'\'">\n\t\t\t\t\t  <div class="item item-body">\n\t\t\t\t\t    <img class="full-image" ng-src="https://klinikestetika.com/{{spa.image}}">\n\t\t\t\t\t    <p class="title">{{spa.name}}</p>\n\t\t\t\t\t     <div ng-bind-html="spa.description | limitTo:250" style="white-space:normal">...</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div> -->\n\t\t\t\t<div class="row responsive-md services-content">\n\n\t\t\t\t<div class="list card spa-post col col-33" ng-repeat="spa in spas" ui-sref="app.serviceSpaDetail({\'service_id\':\'{{spa.id}}\'})">\n\t\t\t\t\t<div class="item item-image">\n\t\t\t\t\t\t<img image-lazy-src="https://klinikestetika.com/{{spa.image}}" image-lazy-loader="dots">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="item item-body">\n\t\t\t\t\t\t<h2 class="title">{{spa.name}}</h2>\n\t\t\t\t\t\t<p ng-bind-html="spa.description | limitTo:100" style="white-space:normal">...</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t<ion-infinite-scroll ng-if="!theEnd" on-infinite="loadMore()" distance="1%">\n  \t\t\t\t\t</ion-infinite-scroll>\n\t\t\t</ion-content>\n\t\t</ion-tab>\n\n</ion-pane>\n\t</ion-tabs>\n</ion-view>\n'), 
        t.put("templates/terms/index.html", '<ion-view view-title="Syarat dan Ketentuan">\n\t<ion-content id="terms">\n\t\t<ion-list>\n\t\t\t<ion-item class="item-text-wrap">\n\t\t\t\t<p>\n\t\t\t\t\tSebelum mengakses situs/platform ini Anda diwajibkan untuk membaca <strong>SYARAT &amp; KETENTUAN</strong> di bawah ini:\n\t\t        </p>\n\t\t\t\t<ol class="list-text">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<p>Dengan mengakses dan menggunakan semua fitur layanan yang ada di situs ini, Anda dengan otomatis telah menyetujui semua bentuk syarat &amp; ketentuan yang telah ditentukan oleh Klinik Estetika dr. Affandi.</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t                <p>Semua akses yang menggunakan password bersifat rahasia dan dilindungi/terlindungi hanya untuk pemilik akun. Di luar pemilik akun tidak diizinkan untuk memperoleh/berusaha memperoleh akses ini secara illegal/tidak sah ke dalam situs ini, termasuk area informasi lain yang bersifat pribadi, rahasia dan dilindungi dengan cara apapun tanpa izin khusus yang telah diberikan resmi dari pihak yang berkepentingan. Segala bentuk pelanggaran akan dikenakan sanksi/hukuman sesuai dengan peraturan &amp; undang-undang yang berlaku di Indonesia.</p>\n\t\t            </li>\n\t\t            <li>\n\t\t            \t<p>Situs ini dikhususkan bagi orang dewasa. Bagi Anda yang masih di bawah umur diwajibkan untuk memiliki izin/persetujuan dari orang tua/wali yang dapat bertanggungjawab atas tindakan Anda, bertanggungjawab atas biaya yang terkait dengan pembelian produk dan layanan dan penerimaan dan pemahaman mengenai Syarat &amp; Ketentuan yang tertera. Tanpa persetujuan/perizinan tersebut, semua hal yang dilakukan oleh pihak terkait di luar tanggung jawab Klinik Estetika dr. Affandi.</p>\n\t\t            </li>\n\t\t            <li>\n\t\t                <p>Penggunaan Situs dan Layanan: <br />\n\t\t                Anda setuju untuk mematuhi setiap ketentuan, pemberitahuan, kebijakan dan instruksi yang terkait dengan penggunaan layanan dan/atau akses ke situs ini sesuai dengan ketentuan Klinik Estetika dr. Affandi, walau tanpa pemberitahuan lebih lanjut.</p>\n\t\t            </li>\n\t\t            <li>\n\t\t                <p>Anda dilarang keras untuk:</p>\n\t\t                <ol>\n\t\t                    <li>\n\t\t                        <p>Memalsukan identitas, memberikan keterangan palsu dan mengakui sebagai orang lain, atau apapun yang bersifat pelanggaran terhadap identitas.</p>\n\t\t                    </li>\n\t\t                    <li>\n\t\t                        <p>Menggunakan situs ini untuk tujuan yang illegal/melanggar hukum dan undang-undang yang berlaku di Indonesia.</p>\n\t\t                    </li>\n\t\t                    <li>\n\t\t                        <p>Berusaha mendapatkan akses secara paksa termasuk mengganggu dan/atau mengacaukan sistem komputer atau jaringan yang berhubungan dengan situs/platform dan layanan ini.</p>\n\t\t                    </li>\n\t\t                    <li>\n\t\t                        <p>Mem-posting, mempromosikan atau mengirimkan materi/konten terlarang melalui situs/dengan mengatasnamakan Klinik Estetika dr. Affandi  tanpa sepengetahuan pihak terkait.</p>\n\t\t                    </li>\n\t\t                    <li>\n\t\t                        <p>Menggunakan, mengunggah, memasukkan perangkat lunak/material yang dicurigai mengandung virus, komponen yang bersifat destruktif, kode berbahaya atau apapun yang serupa yang dapat merusak data dan situs atau mengganggu  akses komputer dan/atau jaringan pelanggan.</p>\n\t\t                    </li>\n\t\t                </ol>\n\t\t            </li>\n\t\t            <li>\n\t\t                <p>Ketersediaan situs dan layanan: <br>\n\t\t                Klinik Estetika dr. Affandi dapat meningkatkan, memodifikasi, menghentikan sementara, menghentikan penyediaan, menghapus, baik secara keseluruhan atau sebagian dari situs atau layanan, tanpa memberikan alasan &amp; pemberitahuan sebelumnya, dan tidak bertanggungjawab jika peningkatan, modifikasi, suspensi atau penghapusan tersebut mencegah Anda mengakses situs atau bagian dari layanan.</p>\n\t\t            </li>\n\t\t            <li>\n\t\t                <p>Pihak Klinik Estetika dr. Affandi  mempunyai hak penuh atas situs ini termasuk:</p>\n\t\t                <ol>\n\t\t                    <li>\n\t\t                        <p>Memantau, menyaring atau mengontrol setiap kegiatan, isi atau materi pada situs dan/atau melalui Layanan. Hal tersebut termasuk/berarti, kami dapat menyelidiki setiap pelanggaran terhadap syarat dan ketentuan yang tercantum di sini dan dapat mengambil tindakan apapun yang dianggap sesuai atau tepat;</p>\n\t\t                    </li>\n\t\t                    <li>\n\t\t                        <p>mencegah atau membatasi akses pelanggan untuk keperluan yang kami anggap melebihi kapasitas;</p>\n\t\t                    </li>\n\t\t                    <li>\n\t\t                        <p>melaporkan kegiatan yang dicurigai sebagai pelanggaran terhadap hukum yang berlaku, undang-undang atau peraturan kepada pihak yang berwenang serta bekerjasama dengan pihak berwenang tersebut; dan/atau</p>\n\t\t                    </li>\n\t\t                    <li>\n\t\t                        <p>meminta informasi dan data dari Anda sehubungan dengan penggunaan Layanan dan/atau akses situs setiap saat, dan sebagai pelaksanaan hak Klinik Estetika dr. Affandi  jika Anda menolak untuk memberikan/mengungkapkan informasi/data tersebut, atau jika Anda memberikan informasi tidak akurat, menyesatkan, penipuan data dan/atau informasi,  atau jika kami memiliki alasan yang cukup mencurigai Anda telah menyediakan informasi tidak akurat, menyesatkan atau penipuan data dan/atau informasi.</p>\n\t\t                    </li>\n\t\t                </ol>\n\t\t            </li>\n\t\t            <li>\n\t\t                <p>Dengan ini Anda telah menyetujui untuk memberikan izin untuk dapat menggunakan informasi yang telah kami terima termasuk tapi tidak terbatas pada, pertanyaan, ulasan, komentar, dan saran. Pihak Klinik Estetika dr. Affandi akan mungkin, namun tidak diwajibkan untuk mempublikasikan, menghapus atau mengubah informasi yang telah Anda berikan perihal submisi.</p>\n\t\t            </li>\n\t\t            <li>\n\t\t                <p>Anda menyetujui dan mengesahkan untuk setiap informasi yang kami terima dapat dipergunakan untuk keperluan promosi dan pengiriman informasi.</p>\n\t\t            </li>\n\t\t        </ol>\n\t\t\t</ion-item>\n\t\t</ion-list>\n    </ion-content>\n</ion-view>'), 
        t.put("templates/users/profile.html", '<ion-view view-title="Profil">\n    <ion-content>\n        <div class="list list-inset">\n            <div class="item item-icon-left">\n                <i class="icon ion-ios-person-outline"></i>\n                Foto Profil\n            </div>\n            <div class="item item-image">\n                <img id="profilePicture" ng-src="{{profileData.picture}}">\n                <!-- <div class="row responsive-sm">\n                    <div class="col">\n                        <div ng-if="profileData.picture">\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n            <button class="button button-block button-calm" ng-click="getProfPic()">Ubah Foto Profil</button>\n        </div>\n        <div class="list list-inset">\n            <div class="item item-icon-left">\n                <i class="icon ion-ios-list-outline"></i>\n                Informasi\n            </div>\n            <!-- <div class="item item-text"> -->\n            <form ng-submit="changeProfile()">\n                <!-- <div class="list"> -->\n                <label class="item item-input  item-floating-label">\n                    <span class="input-label">Nama Lengkap</span>\n                    <input type="text" placeholder="Nama Lengkap" ng-model="profileData.full_name">\n                </label>\n                <label class="item item-input item-select">\n                    <div class="input-label">Jenis Kelamin</div>\n                    <select ng-model="profileData.gender">\n                        <option value="P">Wanita</option>\n                        <option value="L">Pria</option>\n                    </select>\n                </label>\n                <label class="item item-input item-floating-label">\n                    <span class="input-label">Alamat Email</span>\n                    <input type="email" placeholder="Alamat Email" ng-model="profileData.email">\n                </label>\n                <label class="item item-input item-stacked-label">\n                    <span class="input-label">No Handphone</span>\n                    <!-- <input type="text" placeholder="No Handphone" ng-model="profileData.phone"> -->\n                    <input type="number" placeholder="No Handphone" ng-model="profileData.phone">\n                </label>\n                <label class="item item-input item-stacked-label">\n                    <span class="input-label">Tanggal Lahir</span>\n                    <input type="date" ng-model="profileData.dob">\n                </label>\n                <label class="item item-input item-select">\n                    <div class="input-label">Provinsi</div>\n                    <select ng-model="profileData.province" ng-options="a.id as a.name for a in profileData.provinces" ng-change="getCity(profileData.province)"></select>\n                </label>\n                <label class="item item-input item-select">\n                    <div class="input-label">Kota</div>\n                    <select ng-model="profileData.city" ng-options="a.id as a.name for a in profileData.cities"></select>\n                </label>\n                <label class="item item-input item-stacked-label">\n                    <span class="input-label">Kode Pos</span>\n                    <!-- <input type="text" placeholder="Kode Pos" ng-model="profileData.postal_code"> -->\n                    <input type="number" placeholder="Kode Pos" ng-model="profileData.postal_code">\n                </label>\n                <label class="item item-input item-floating-label">\n                    <span class="input-label">Alamat</span>\n                    <textarea msd-elastic="\\n" type="text" placeholder="Alamat" ng-model="profileData.address"></textarea>\n                </label>\n                <button class="button button-block button-calm" type="submit">Simpan Perubahan</button>\n                <!-- </div> -->\n            </form>\n            <!-- </div> -->\n        </div>\n        <div class="list list-inset">\n            <div class="item item-icon-left">\n                <i class="icon ion-ios-locked-outline"></i>\n                Ubah Password\n            </div>\n            <!-- <div class="item item-text"> -->\n                <form ng-submit="changePassword()">\n                    <label class="item item-input item-stacked-label">\n                        <span class="input-label">Password Lama</span>\n                        <input type="password" placeholder="Password Lama" ng-model="profileData.passwordLama">\n                    </label>\n                    <label class="item item-input item-stacked-label">\n                        <span class="input-label">Password Baru</span>\n                        <input type="password" placeholder="Password Baru" ng-model="profileData.passwordBaru">\n                    </label>\n                    <button class="button button-block button-calm" type="submit">Ubah Password</button>\n                </form>\n            <!-- </div> -->\n        </div>\n    </ion-content>\n</ion-view>\n'), 
        t.put("templates/videos/index.html", '<ion-view cache-view="false" view-title="Video Consultation" id="video-consultation">\n  <ion-content style="margin-bottom:0px;padding-bottom:0px;">\n    <ion-refresher pulling-text="Pull to refresh..." on-refresh="refreshAvailableSessions()"></ion-refresher>\n    <ion-list ng-show="bookedSessionData">\n      <ion-item class="item-divider">My Booking</ion-item>\n      <ion-item class="item-button-right" ng-click="readyToConsultation(bookedSessionData)">\n        <h2>{{bookedSessionData.date}}</h2>\n        <p>{{bookedSessionData.start_time}} - {{bookedSessionData.end_time}} {{bookedSessionData.time_remaining}}</p>\n        <button class="button button-assertive" ng-click="cancelBook($event)">\n            Cancel\n          </button>\n      </ion-item>\n      <br />\n    </ion-list>\n    <ion-list>\n      <ion-item class="item-divider">Available bookings</ion-item>\n      <div ng-repeat="item in availableSessions">\n        <ion-item class="item-stable" ng-click="toggleGroup(item)" ng-class="{active: isGroupShown(item)}">\n          <i class="icon" ng-class="isGroupShown(item) ? \'ion-minus\' : \'ion-plus\'"></i>\n          &nbsp;\n          {{item.date}}\n        </ion-item>\n        <ion-item ng-repeat="session in item.sessions" ng-show="isGroupShown(item)" class="item-button-right">\n          <h2>{{session.start_time}} - {{session.end_time}}</h2>\n          <p>{{session.status}}</p>\n          <button class="button button-positive" ng-click="book(session)" ng-hide="isSessionFinished(session)">\n            Book\n          </button>\n        </ion-item>\n      </div>\n    </ion-list>\n  </ion-content>\n</ion-view>\n'), 
        t.put("templates/videos/live.html", '<ion-view view-title="Video Consultation" id="consultation">\n  <ion-content>\n\n    <!-- <div class="list mg-b-0" ng-if="!consultationData" ng-repeat="consultation in consultations | orderBy:\'-id\'">\n\n      <div class="item item-text-wrap item-thumbnail-left">\n\n        <img ng-show="consultation.image" ng-src="{{consultation.image}}">\n        <h2>{{consultation.status}}</h2>\n        <p>{{consultation.created_at}}</p>\n\n        <div style="clear:both"></div>\n        <button ng-if="consultation.status == \'Tersedia\'"\n          ng-click="buyPrescription(consultation.id)"\n          class="button button-calm button-block button-stable">\n          Beli\n        </button>\n\n      </div>\n\n    </div> \n\n\n    <div ng-if="consultationData">\n    </div> -->\n\n  </ion-content>\n</ion-view>\n'), 
        t.put("templates/videos/waiting.html", '<ion-view view-title="Video Consultation" id="consultation">\n  <div id="publisher"></div>\n  <div id="subscriber"></div>\n  <ion-content ng-hide="isSubscribing">\n    <div class="list card">\n      <div class="item item-text-wrap calm-bg text-center light waiting-content">\n        Sesi konsultasi Anda akan dimulai dalam waktu<br /><br />\n        <timer max-time-unit="\'minute\'" end-time="end_waiting_time" interval="1000">\n          <h1 class="light">{{mminutes}}:{{sseconds}}</h1>\n        </timer><br />\n        <p ng-repeat="text in textWarning">{{text}}</p>\n      </div>\n    </div>\n  </ion-content>\n  <!-- <ion-content>\n    <p>Subscriber:</p>\n\n    <ot-layout props="{animate:true,bigFixedRatio:true}">\n      <ot-subscriber ng-repeat="stream in streams" stream="stream" props="{style: {nameDisplayMode: \'off\'}}"></ot-subscriber>\n      <div id="facePublisher" ng-if="publishing">\n        <ot-publisher id="publisher" props="{style: {nameDisplayMode: \'off\'}, resolution: \'1280x720\', frameRate: 30}"></ot-publisher>\n      </div>\n      <reconnecting-overlay id="reconnectingOverlay"\n        ng-if="reconnecting"\n        ng-cloak>\n      </reconnecting-overlay>\n    </ot-layout>\n\n  </ion-content> -->\n</ion-view>\n'),
        t.put("templates/views/home.html", '<ion-view view-title="Estetika dr. Affandi" id="home">\n    <ion-content>\n\n        <div class="home-start">\n            <!-- <div class="home-hero text-center padding-80 margin-20">\n                <img ng-src="images/estetikalogo.png">\n                <p>Konsultasikan kesehatan dan kecantikan kulit Anda di sini melalui <em>Konsultasi Foto</em></p>\n                <button class="button button-calm button-small relative" ng-click="goConsult()">\n                    Konsultasi Sekarang <span class="floating-free">FREE</span>\n                </button>\n                <button class="button button-balanced button-block button-large --relative" ng-click="goConsult()">\n                    Konsultasi Sekarang\n                </button>\n            </div> -->\n\n            <ion-slide-box delegate-handle="banner-side-box" on-slide-changed="slideHasChanged($index)">\n                <ion-slide ng-repeat="banner in banners">\n                    <button class="button button-clear box blue" ng-click="linkToArticle({{banner}})">\n                      <!-- <button class="button button-clear" style="padding:0">\n                        <img class="full-image" ng-src="https://klinikestetika.com/{{ banner.image }}">\n                      </button> -->\n                      <img class="full-image" ng-src="https://klinikestetika.com/{{ banner.image }}">\n                    </button>\n                </ion-slide>\n             </ion-slide-box>\n\n            <div ng-show="bannersLoaded" class="home-contents">\n\n                <div class="consultation">\n                    <div class="row pd-0">\n                        <div class="col col-33 pd-0 image">\n                            <img class="full-image thumb" src="https://klinikestetika.com/images/home-banner-doctor.png">\n                        </div>\n                        <div class="col col-67 content">\n                            <h4>FREE ONLINE <strong>CONSULTATION</strong></h4>\n                            <p>Konsultasikan kesehatan dan kecantikan kulit Anda secara gratis di sini melalui Konsultasi Foto {{additionalTextOnAndroid}}</p>\n                            <button ng-click="openConsultation()" class="button button-balanced button-block button-small mg-0">KONSULTASI SEKARANG</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="products">\n                    <div class="row pd-0">\n                        <div class="col col-33 pd-0 image">\n                            <img class="product-default" src="https://klinikestetika.com/images/oil-control-serum.png">\n                        </div>\n                        <div class="col col-67 content">\n                            <p class="calm">OUR PRODUCT</p>\n                            <h4>LOTION <strong>OIL CONTROL</strong> (SERUM VITAMIN C)</h4>\n                            <p>Dapatkan kemudahan untuk membeli produk perawatan kulit dimanapun Anda berada dengan Estetika M-Commerce</p>\n                            <button ui-sref="app.product" class="button button-balanced button-block button-small">PESAN SEKARANG</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <!--<button class="button button-balanced button-full" ng-click="checkSuccess()">CONTOH</button>-->\n            <!-- <div class="home-product">\n                <div class="padding">\n                    <h4><span>Produk Kami</span></h4>\n                </div>\n\n                <ion-list class="padding-reset" ng-if="products">\n                    <ion-item width="50%" class="product-post margin-10" ng-repeat="product in products" href="#/app/product/detail/{{product.id}}">\n                        <div class="post-thumbnail">\n                            <img ng-if="product.is_otc == 0" ng-src="images/ribon.png" alt="" class="ribbon">\n                            <img style="width:100%" ng-if="product.image" ng-src="https://klinikestetika.com/{{ product.image }}">\n                        </div>\n\n                        <div class="post-title">\n                            <h3><b>{{ product.title }}</b></h3>\n                        </div>\n                    </ion-item>\n                </ion-list>\n\n                <div class="padding">\n                    <div class="text-center mg-t-20 mg-b-20">\n                        <a href="#/app/product" class="button button-calm">VIEW ALL</a>\n                    </div>\n                </div>\n            </div> -->\n        </div>\n\n    </ion-content>\n</ion-view>\n'), 
        t.put("templates/views/promo.html", '<ion-view view-title="Promo" id="home">\n\t<ion-content lazy-scroll>\n\t\t<div class="list">\n\t\t\t<a class="card item begin-post article" ng-repeat="banner in banners" ng-click="loadArticle({{banner}})">\n\t\t\t\t<div class="thumbnail-article">\n\t\t\t\t\t<img class="full-image" image-lazy-src="https://klinikestetika.com/{{ banner.image }}" image-lazy-loader="dots">\n\t\t\t\t</div>\n\t\t\t\t<div style="padding:5px 10px">\n\t\t\t\t\t<div class="title-article"><b>{{banner.title}}</b></div>\n\t\t\t\t\t<div class="meta-article">\n\t\t\t\t\t\t<span>\n              <i class="icon ion-calendar"></i> {{banner.updated_at}}\n            </span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/views/settings.html", '<ion-view view-title="Settings">\n    <ion-content>\n        <div class="list">\n\n            <!-- connect toggles to controller using ng-model -->\n\n            <ion-toggle>\n                <span class="settings-item__text">\n                    Allow Push Notifications\n                </span>\n            </ion-toggle>\n\n            <ion-toggle>\n                <span class="settings-item__text">\n                    Allow cookies\n                </span>\n            </ion-toggle>\n\n        </div>\n    </ion-content>\n\n</ion-view>\n'), 
        t.put("templates/products/checkout/shipping.html", '<ion-view cache-view="false" view-title="Pengiriman" id="products">\n\t<ion-content class="products-shipping-start">\n\t\t<div class="list form payment" ng-if="!mobile_session">\n<!-- Nama Lengkap -->\n            <div class="padding">\n                Sudah punya Akun? Login Untuk Mempercepat Belanja Anda\n                <button class="button button-positive button-block text-left" ng-click="login()">Login</button>\n            </div>\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">Nama Lengkap <span style="color:red">*</span></span>\n                <input type="text" ng-model="shippingData.full_name" placeholder="Nama Lengkap">\n            </label>\n\n\n<!-- Gender -->\n            <div class="item item-input item-stacked-label">\n                <span class="input-label">Gender <span style="color:red">*</span></span>\n\n                <label class="item item-select">\n                    <select ng-model="shippingData.gender" name="gender">\n                        <option value="L">Male</option>\n                        <option value="F">Perempuan</option>\n                    </select>\n                </label>\n            </div>\n\n\n<!-- No. Telepon/HP -->\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">No. Telepon/HP <span style="color:red">*</span></span>\n                <input type="tel" ng-model="shippingData.phone" placeholder="(+62)">\n            </label>\n\n            <label class="item item-input item-stacked-label">\n              <span class="input-label">Tanggal Lahir <span style="color:red">*</span></span>\n              <input type="date" ng-model="shippingData.dob">\n            </label>\n\n\n<!-- Email -->\n            <label class="item item-input item-stacked-label">\n                <span class="input-label">Email <span style="color:red">*</span></span>\n                <input type="email" ng-model="shippingData.email" placeholder="">\n            </label>\n\n\n<!--Password -->\n\n\n            <ion-toggle ng-model="shippingData.is_old_patient" toggle-class="toggle-calm" ng-true-value="1" ng-false-value="0" name="old_patient">\n                <span class="settings-item__text">\n                    Saya pasien lama\n                </span>\n            </ion-toggle>\n\n\n        </div>\n\n\t\t<div class="list form payment">\n            <label class="item item-input item-stacked-label">\n                <span class="input-label payment-label">Alamat <span class="assertive">*</span></span>\n                <textarea ng-model="shippingData.address" placeholder="Alamat"></textarea>\n            </label>\n\n            <div class="item item-input item-stacked-label">\n                <span class="input-label payment-label">Provinsi <span class="assertive">*</span></span>\n\n                <label class="item item-select">\n                     <select ng-model="shippingData.province" ng-options="a.id as a.name for a in provinces" ng-change="getCities(shippingData.province)">\n                </select>\n                </label>\n            </div>\n\n            <div class="item item-input item-stacked-label">\n                <span class="input-label payment-label">Kota <span class="assertive">*</span></span>\n\n                <label class="item item-select">\n                    <select ng-model="shippingData.city" ng-options="a.id as a.name for a in cities" >\n                    </select>\n                </label>\n            </div>\n\n            <div class="item item-input-inset">\n                <label class="item-input-wrapper">\n                    <span class="input-label payment-label">Kode pos <span class="assertive">*</span></span>\n                    <input ng-model="shippingData.postal_code" type="text" placeholder="Kode Pos" pattern="\\d*" required>\n                </label>\n            </div>\n\n            <!-- <div class="item item-input-inset">\n                <label class="item-input-wrapper">\n                    <input ng-model="shippingData.promo" type="text" placeholder="Kode Promo">\n                </label>\n                <button class="button button-small" ng-click="checkPromoCode()">\n                  Check\n                </button>\n              </div> -->\n\n            <label class="item item-input">\n                <span class="input-label payment-label">Total Harga</span>\n                <input type="text" ng-value="shippingData.total|currency:\'Rp \'" ng-disabled="true">\n            </label>\n\n             <!-- <div class="item item-input item-stacked-label">\n                <span class="input-label">Provinsi <span class="assertive">*</span></span>\n\n                <label class="item item-select">\n                     <select ng-model="shippingData.province" ng-options="a.id as a.name for a in provinces" ng-change="getCities(shippingData.province)">\n                </select>\n                </label>\n            </div>\n\n            <div class="item item-input item-stacked-label">\n                <span class="input-label">Kota <span class="assertive">*</span></span>\n\n                <label class="item item-select">\n                    <select ng-model="shippingData.city" ng-options="a.id as a.name for a in cities" >\n                    </select>\n                </label>\n            </div>\n\n\n\t\t\t<label class="item item-input item-stacked-label">\n\t\t\t\t<span class="input-label">Kode pos <span class="assertive">*</span></span>\n\t\t\t\t<input ng-model="shippingData.postal_code" type="text" placeholder="Kode Pos" pattern="\\d*" required>\n\t\t\t</label>\n\n\t\t\t<label class="item item-input item-stacked-label">\n\t\t\t\t<span class="input-label">Alamat <span class="assertive">*</span></span>\n\t\t\t\t<textarea ng-model="shippingData.address" placeholder="Alamat"></textarea>\n\t\t\t</label> -->\n\t\t</div>\n\n\n\n\t\t<div class="padding">\n\t\t\t<button ng-click="checkoutOrder()"class="button button-positive button-block">\n\t\t\t\tPembayaran\n\t\t\t</button>\n\t\t</div>\n\t</ion-content>\n</ion-view>\n'), 
        t.put("templates/services/kulit/detail.html", '<ion-view view-title="{{data.title}}" id="serviceKulitDetail">\n  <ion-content>\n    \n\n<!-- Start Post Content -->\n    <div class="begin-post article">\n      <div class="thumbnail-article">\n          <img ng-if="data.image"  class="cover" ng-src="https://klinikestetika.com/{{data.image}}">\n      </div>\n\n      <div style="padding:5px 10px;">\n        <div class="title-article"><b>{{data.title}}</b></div>\n\n<!-- Meta Content -->\n        <div class="meta-article">\n          <span>\n            <i class="icon ion-calendar"></i> {{data.updated_at}}\n          </span>\n\n          <span>\n            <i class="icon ion-ios-pricetag"></i>{{data.name}}\n          </span>\n        </div>\n\n<!-- Exce Content -->\n        <hr>\n        <div ng-bind-html="content"></div>\n      </div>\n    </div>\n \n  </ion-content>\n</ion-view>\n'), 
        t.put("templates/services/kulit/index.html", '<div class="list">\n\t<a href="#/app/service/kulit/detail/{{kulit.id}}" class="item" ng-repeat="kulit in kulits">\n\t\t{{ kulit.name }}\n\t</a>\n\n\t\n</div>\t'), 
        t.put("templates/services/spa/detail.html", '<ion-view view-title="{{data.title}}" id="serviceSpaDetail">\n  <ion-content>\n    <ion-refresher\n    pulling-text="Pull to refresh..."\n    on-refresh="refreshDetailArticle()">\n    </ion-refresher>\n\n\n<!-- Start Post Content -->\n    <div class="begin-post article">\n      <div class="thumbnail-article">\n          <img class="full-image" ng-src="https://klinikestetika.com/{{data.image}}">\n      </div>\n\n      <div style="padding:5px 10px;">\n        <div class="title-article"><b>{{data.title}}</b></div>\n\n<!-- Meta Content -->\n        <div class="meta-article">\n          <span>\n            <i class="icon ion-calendar"></i> {{data.updated_at}}\n          </span>\n\n          <span>\n            <i class="icon ion-ios-pricetag"></i> {{data.name}}\n          </span>\n        </div>\n\n<!-- Exce Content -->\n        <hr>\n        <div ng-bind-html="data.description"></div>\n      </div>\n    </div>\n \n  </ion-content>\n</ion-view>\n'), 
        t.put("templates/services/spa/index.html", "\n\n\n")
}]);