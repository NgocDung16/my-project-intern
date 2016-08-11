//    // Khởi tạo mảng dữ liệu sản phẩm mới
    var products = [
        {
            id: 1, id_category: "spmoi", 
            name: "Áo khoác cà rốt", old: "250000", 
            new: "200000", imageUrl: "images/ao.jpg", 
            size1: "S", 
            size2: "M", 
            size3: "L", 
            descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"
        },
        {id: 2, id_category: "spmoi", name: "Giày Hello Kitty", old: "120000", new: "100000", imageUrl: "images/cc.jpg", size1: "37", size2: "38", size3: "39", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Giày thể thao xuất khẩu---Bảo hành: 8 tháng"},
        {id: 3, id_category: "spmoi", name: "Bộ bé gái (hồng)", old: "90000", new: "70000", imageUrl: "images/a33.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 5, id_category: "spmoisale", name: "Áo khoác ca rô", old: "250000", new: "200000", imageUrl: "images/ao2.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1452M.768.RT---Thương hiệu: Áo bành..hihi---Bảo hành: 4 tháng"},
        {id: 6, id_category: "girl", name: "Giày thể thao YTH", old: "170000", new: "150000", imageUrl: "images/cc.jpg", imageUrlLarge: "images/zoom-cc.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 7, id_category: "spmoi", name: "Bộ bé gái (hồng)", old: "90000", new: "70000", imageUrl: "images/a33.jpg", size1: "S", size2: "M", size3: "XL", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 8, id_category: "boy", name: "Bộ bé trai TR03", old: "90000", new: "80000", imageUrl: "images/bo.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 3 tháng"},
        {id: 9, id_category: "boy", name: "Quần Jean đùi TR06", old: "90000", new: "80000", imageUrl: "images/jean-boy.jpg", size1: "S", size2: "M", size3: "XXL", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 10, id_category: "boysale", name: "Áo thun bé trai", old: "90000", new: "80000", imageUrl: "images/sirtboy.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 5 tháng"},
        {id: 11, id_category: "girl", name: "váy voan Thái Lan", old: "250000", new: "200000", imageUrl: "images/v22.jpg", size1: "M", size2: "L", size3: "XL", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 12, id_category: "girl", name: "Váy tầng V30", old: "230000", new: "185000", imageUrl: "images/v29.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 8 tháng"},
        {id: 13, id_category: "girlsale", name: "Váy bé gái cộc tay", old: "250000", new: "170000", imageUrl: "images/v25.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 14, id_category: "shoe", name: "SỤC SIÊU NHẸ HELLO KITTY", old: "160000", new: "130000", imageUrl: "images/shoe3.jpg", size1: "29", size2: "32", size3: "40", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 9 tháng"},
        {id: 15, id_category: "shoe", name: "Giày thể thao Nike", old: "270000", new: "240000", imageUrl: "images/bb.jpg", size1: "27", size2: "28", size3: "29", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 16, id_category: "shoe", name: "Xăng đan Hàn Quốc", old: "160000", new: "130000", imageUrl: "images/shoe2.jpg", size1: "30", size2: "31", size3: "32", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 6 tháng"},
        {id: 17, id_category: "boy", name: "Bộ bé trai TR03", old: "90000", new: "80000", imageUrl: "images/bo2.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 6 tháng"},
        {id: 18, id_category: "boysale", name: "Bộ bé trai TR06", old: "90000", new: "80000", imageUrl: "images/bo3.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 19, id_category: "boy", name: "Bộ bé trai TR04", old: "90000", new: "80000", imageUrl: "images/bo4.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 20, id_category: "girl", name: "Váy hoa đào V23", old: "250000", new: "200000", imageUrl: "images/v23.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 21, id_category: "girlsale", name: "Váy công chúa", old: "230000", new: "185000", imageUrl: "images/v26.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 22, id_category: "", name: "Váy xòe tuyết trắng", old: "250000", new: "170000", imageUrl: "images/detail.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 23, id_category: "shoe", name: "Bata Đỏ", old: "160000", new: "130000", imageUrl: "images/bbb.jpg", size1: "36", size2: "37", size3: "38", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 24, id_category: "shoe", name: "Sục Hello Kitty siêu nhẹ ", old: "270000", new: "240000", imageUrl: "images/shoe1.jpg", size1: "35", size2: "36", size3: "37", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 25, id_category: "shoe", name: "Bata trắng", old: "160000", new: "130000", imageUrl: "images/b.jpg", size1: "27", size2: "28", size3: "29", descripttion: "Mã code: 1352M.358.DE---Thương hiệu: Giày chợ---Bảo hành: 12 tháng"},
        {id: 26, id_category: "spmoi", name: "Áo khoác cà rốt", old: "250000", new: "200000", imageUrl: "images/ao.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 27, id_category: "child", name: "Bao tay Thái Lan 164C", old: "30000", new: "28000", imageUrl: "images/baotay.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao tay comfort Thái Lan 164C----Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 28, id_category: "child", name: "Bộ body Thái Lan", old: "240000", new: "209000", imageUrl: "images/body.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bộ body Thái Lan---Mã code: 1352M.358.DE---Thương hiệu: Giày chợ---Bảo hành: 12 tháng"},
        {id: 29, id_category: "childsale", name: "Bao chân First-wear", old: "50000", new: "32000", imageUrl: "images/baochan.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao chân First-wear---Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 30, id_category: "child", name: "Tất Thái Lan trẻ em", old: "30000", new: "21000", imageUrl: "images/tatchan.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao tay comfort Thái Lan 164C----Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 33, id_category: "pk", name: "Băng đô ren túm tóc", old: "28000", new: "22000", imageUrl: "images/pk1.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mũ sơ sinh 2 tai Bibos---Mã code: 1352M.358.DE---Thương hiệu: Giày chợ---Bảo hành: 12 tháng"},
        {id: 34, id_category: "pk", name: "Vòng đội đầu tỉ muội ", old: "150000", new: "132000", imageUrl: "images/pk2.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao chân First-wear---Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 35, id_category: "pk", name: "Khẩu trang tai chó", old: "30000", new: "21000", imageUrl: "images/pk3.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao tay comfort Thái Lan 164C----Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 36, id_category: "pk", name: "Băng đô hoa đổi màu", old: "28000", new: "22000", imageUrl: "images/pk4.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Mũ sơ sinh 2 tai Bibos---Mã code: 1352M.358.DE---Thương hiệu: Giày chợ---Bảo hành: 12 tháng"},
        {id: 37, id_category: "pk", name: "Bờm nhựa gắn hình ", old: "50000", new: "32000", imageUrl: "images/pk5.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao chân First-wear---Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 38, id_category: "pk", name: "Cặp mái lò xo", old: "30000", new: "21000", imageUrl: "images/pk6.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao tay comfort Thái Lan 164C----Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 31, id_category: "child", name: "Mũ len sơ sịnh", old: "50000", new: "32000", imageUrl: "images/musosinh.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao chân First-wear---Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        {id: 32, id_category: "child", name: "Bộ bé gái sơ sinh", old: "30000", new: "21000", imageUrl: "images/begai.jpg", size1: "S", size2: "M", size3: "L", descripttion: "Bao tay comfort Thái Lan 164C----Mã code: 1222M.768.DE---Thương hiệu: Mango---Bảo hành: 4 tháng"},
        
    ];
    //mảng dữ liệu items
    var items = [
        
        {id: "item2", item: "Chúng tôi là...", link: "intro"},
        {id: "item3", item: "Đồ bộ bé trai", link: "boy"},
        {id: "item4", item: "Áo váy bé gái", link: "girl"},
        {id: "item5", item: "Trang phục trẻ sơ sinh", link: "sosinh"},
        {id: "item6", item: "Giày xinh cho bé yêu", link: "shoe"},
        {id: "item7", item: "Phụ kiện dễ thương", link: "phukien"},
        {id: "item8", item: "Khuyến mãi cực sốc", link: "sale"},
        {id: "item9", item: "Bài viết hay", link: "new"},
        {id: "item10", item: "Chia sẻ thú vị", link: "new"},
    ];
    //mãng dữ liệu menu
    var menus = [
        {id: "item1", class: "", name: "Trang chủ", link: "index"},
        {id: "item2", class: "hidden-sm",name: "Giới thiệu", link: "intro"},
        {id: "item3", class: "dropdown", name: "Trang phục bé trai", link: "boy",
            branch:
                [{
                    menu1: "Áo sơ mi dài tay", 
                    menu2: "Áo thun", 
                    menu3: "Quần jean",
                    menu4: "Bộ bé trai",
                    menu5: "Vớ",
                    menu6: "Trang phục trẻ sơ sinh"
                }]
        },
        {id: "item4", class: "dropdown", name: "Trang phục bé gái", link: "girl",
            branch: [{
                menu1: "Váy công chúa", 
                menu2: "Áo kiểu", 
                menu3: "Quần jean",
                menu4: "Bộ bé gái",
                menu5: "Vớ",
                menu6: "Trang phục trẻ sơ sinh"
            }]
        },
        {id: "item5", class: "dropdown", name: "Giày", link: "shoe",
            branch: [{
                menu1: "Dép", 
                menu2: "Giày sanda", 
                menu3: "Giày Boot",
                menu4: "Giày búp bê",
                menu5: "Giày thể thao",
                menu6: "Giày mọi"
            }]
        },
        {id: "item6", class: "dropdown",name: "Phụ kiện", link: "phukien",
            branch: [{
                menu1: "Ba lô", 
                menu2: "Nón", 
                menu3: "Đồng hồ",
                menu4: "Kẹp tóc",
                menu5: "Băng đô",
                menu6: "Bờm nhựa"
            }]
        },
        {id: "item7", class: "hidden-md hidden-sm",name: "Khuyến mãi", link: "sale"},
        {id: "item8", class: "hidden-sm", name: "Tin tức", link: "new"},
        {id: "item9", class: "hidden-sm", name: "Liên hệ", link: "contact"},
    ];
    //mảng dữ liệu bài viết mới
    var news = [
        {id: "13", title: "MỘT SỐ MẸO CHỌN GIÀY PHÙ HỢP CHO BÉ YÊU", imageUrl: "images/aa.jpg", name: "SANDAL BÉ GÁi", price: "260000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..."},
        {id: "14", title: "NHỮNG GỢI Ý KHI CHỌN GIÀY DÉP CHO BÉ", imageUrl: "images/aaa.jpg", name: "SANDAL BÉ GÁi", price: "210000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..."},
        {id: "15", title: "NHỮNG GỢI Ý KHI CHỌN GIÀY DÉP CHO BÉ", imageUrl: "images/saaa.jpg", name: "SANDAL BÉ GÁi", price: "230000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..."},
    ];
    var colors = [
    {imageUrl: "images/small77.jpg"},
    {imageUrl: "images/small80.jpg"},
    {imageUrl: "images/small82.jpg"},
    {imageUrl: "images/small83.jpg"},
    {imageUrl: "images/small85.jpg"},
    {imageUrl: "images/small87.jpg"},
    {imageUrl: "images/small88.jpg"},
    {imageUrl: "images/small_hover393.jpg"},
    {imageUrl: "images/small_hover427.jpg"},
    {imageUrl: "images/small_hover429.jpg"},
    {imageUrl: "images/small_hover479.jpg"},
    {imageUrl: "images/small85.jpg"},
    {imageUrl: "images/small87.jpg"},
    {imageUrl: "images/small88.jpg"},
    ];
    var size = [
        {size: "S"},
        {size: "M"},
        {size: "L"},
        {size: "XL"},
        {size: "XXL"},
        {size: "27"},
        {size: "28"},
        {size: "29"},
        {size: "30"},
        {size: "31"},
        {size: "32"},
        {size: "33"},
        {size: "34"},
        {size: "35"},
        {size: "36"},
        {size: "38"},
        {size: "39"},
        {size: "40"},
        {size: "41"},
        {size: "42"},
    ];
    var prices = [
        {prices: " 0₫ - 100000₫"},
        {prices: " 100000₫ - 200000₫"},
        {prices: " 200000₫ - 300000₫"},
        {prices: " 300000₫ - 400000₫"},
        {prices: " 400000₫ - 500000₫"},
        {prices: " > 500000₫"}
    ];
    
    var ShopApp = angular.module("shopApp", ["ui.router"]);
    
//    ShopApp.controller("shopController",transferdata);
//    function transferdata($scope, $http){
//        $http.get('../HTML5Application/database/products.json').
//            success(function(data) {
//                console.log(data);
//                $scope.products = data;
//            });
//    };
    ShopApp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/index");
      
      $stateProvider
        .state('index', {
            url: "/index",
            templateUrl: "pages/home.html"
        })
        
        .state('intro', {
            url: "/intro",
            templateUrl: "pages/intro.html"
        })
        .state('pay', {
            url: "/pay",
            templateUrl: "pages/pay.html"
        })
        .state('sale', {
            url: "/sale",
            templateUrl: "pages/sale.html"
        })
        .state('categories', {
            url: "/categories",
            templateUrl: "pages/categories.html"
        })
        .state('new', {
            url: "/new",
            templateUrl: "pages/new.html"
        })
        .state('spmoi', {
            url: "/spmoi",
            templateUrl: "pages/spmoi.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "pages/contact.html"
        })
        .state('boy', {
            url: "/boy",
            templateUrl: "pages/boy.html"
        })
        .state('sosinh', {
            url: "/sosinh",
            templateUrl: "pages/sosinh.html"
        })
        .state('phukien', {
            url: "/phukien",
            templateUrl: "pages/phukien.html"
        })
        .state('girl', {
            url: "/girl",
            templateUrl: "pages/girl.html"
        })
        .state('shoe', {
            url: "/shoe",
            templateUrl: "pages/shoe.html"
        })
        .state('detail', {
            url: "/detail",
            templateUrl: "pages/detail.html"
        })
        .state('order', {
            url: "/order",
            templateUrl: "pages/order.html"
        });
    });
    ShopApp.controller("shopController", shopController );
    function shopController($scope,$rootScope){
        // Dùng để hiển thị sản phẩm ra
        $scope.products = products;
        //menu active
        $scope.states = {};
        $scope.states.activeItem = 'item1';
        //end
        $scope.items = items;
        $scope.menus = menus;
        $scope.news = news;
        $scope.colors = colors;
        $scope.size = size;
        $scope.prices = prices; 
        
        
        $scope.activeTab=1;
        $scope.changeData= function(key){
            $scope.activeTab=key;
        };
        
        
        //Validate data
        $scope.success=false;
        $scope.register = function(){
            $scope.success=true;
        }  ;  
        //Truyen du lieu giua hai bien
        $scope.test = '';
        var test = $rootScope.$on('dataFilter',function(e,value){//nhan du lieu tu controller duoi   
            $scope.test = value;
//            console.log(value);
        });
        $scope.$on('destroy',test);  
    }
    ShopApp.controller("headerController", headerController );
    function headerController($scope,$rootScope){
        $scope.productFilter = '';
        $scope.checkFilter = function(){
            $rootScope.$emit('dataFilter',$scope.productFilter) //truyen data cho controller khac
        };
    }
    
    
    function check(form) { 
        var link = '../HTML5Application/database/user.json';
        $.ajax({
            url: link,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                    $.each(data.user, function(index, item) {
                        if((form.username.value == item.username && form.password.value == item.password)){
//                                    alert("Đăng nhập thành công");
                            window.location = 'index.html';
                        }
                        else {
//                                    alert("Sai tên đăng nhập hoặc mật khẩu")
                        }
                        console.log(form.username.value + '-----' + item.username);
                        console.log(form.password.value + '-----' + item.password);
                    });
            }  
        });
    }
  
//    $( document ).ready(function() {
//        // API
//        var link = '../HTML5Application/database/products.json';
//        $.ajax({
//            url: link,
//            type: 'GET',
//            dataType: 'json',
//            success: function(data) {
//                $.each(data.products, function(index, item) {
//                    console.log(item.id + "----"+ item.name);
//                });
//            }
//        });
//    });
 