app.controller('FriendController', function($scope, friendService){
        friendService.getFriends().success(function(data) {
            $scope.friends = data.results;
            angular.forEach($scope.friends, function(friend) {
                friend.friend_count = parseInt(friend.friend_count, 10);
            });
        });
    
    $scope.sortField = "name";
    
//    $scope.myFilter = function(friend) {
//        if (friend.name.toUpperCase().indexOf($scope.searchText.toUpperCase()) != -1) {
//            return true;
//        } else {
//            return false;
//        }
//    }
});
    
//    $scope.name = "Cali Fornia";
//    $scope.location = "New Port Beach, California, United States";
//    $scope.status = "I hate the snow. I wish I was on the beach right now!!! <span class='hashtag'>#ihateprovo</span>";
//    $scope.friendCount = "1,367";
//    $scope.pictureUrl = "https://scontent-a.xx.fbcdn.net/hprofile-ash3/833_10200838803828124_1233160321_a.jpg";
//    $scope.test = 'Hey my angular is working';
    
//    
//    function friendsDownloaded(downloadedFriends) {
//        $scope.friends = downloadedFriends;
//        console.log("friends:", friends);
//    }
    
//    $scope.friends = [{
//        "name": "Naishi Zhang",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/174266_842841_1023237973_q.jpg",
//        "current_location": {
//            "city": "New York",
//            "state": "New York",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.7167",
//            "longitude": "-74",
//            "id": "108424279189115",
//            "name": "New York, New York"
//        },
//        "status": null,
//        "friend_count": null
//    }, {
//        "name": "Preston McNeil",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1117694_1614542_108355616_q.jpg",
//        "current_location": {
//            "city": "Houston",
//            "state": "Texas",
//            "country": "United States",
//            "zip": "",
//            "latitude": "29.7629",
//            "longitude": "-95.3832",
//            "id": "115963528414384",
//            "name": "Houston, Texas"
//        },
//        "status": null,
//        "friend_count": "630"
//    }, {
//        "name": "Marcella Marina Medina",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/195651_3209484_1998551021_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": null
//    }, {
//        "name": "Jeffrey Wu",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/1076568_3415115_37205502_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1600"
//    }, {
//        "name": "Tyler Slater",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1119585_6023643_1075404322_q.jpg",
//        "current_location": null,
//        "status": {
//            "message": "Ignore the stereotype the title alludes to, GBF is Saved meets Mean Girls meets John Tucker Must Die with a little Clueless - aka rent it this weekend.",
//            "time": "1390669658",
//            "status_id": "10102315215017401",
//            "comment_count": "0"
//        },
//        "friend_count": "1304"
//    }, {
//        "name": "Ryan Rasmussen",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/211536_7938705_80713399_q.jpg",
//        "current_location": {
//            "city": "Austin",
//            "state": "Texas",
//            "country": "United States",
//            "zip": "",
//            "latitude": "30.2672",
//            "longitude": "-97.7639",
//            "id": "106224666074625",
//            "name": "Austin, Texas"
//        },
//        "status": null,
//        "friend_count": "1017"
//    }, {
//        "name": "Terri Ruff Bond",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/41368_8222994_4799_q.jpg",
//        "current_location": {
//            "city": "Sandy",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.5724",
//            "longitude": "-111.86",
//            "id": "105496622817769",
//            "name": "Sandy, Utah"
//        },
//        "status": {
//            "message": "Please keep our bunny Alex in your prayers. He is not doing well...",
//            "time": "1390876841",
//            "status_id": "10102100195772713",
//            "comment_count": "0"
//        },
//        "friend_count": "270"
//    }, {
//        "name": "Lindsey Mayer",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/173210_10024969_2137324550_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "864"
//    }, {
//        "name": "Brittney Greer",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1119154_10029066_534224090_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "829"
//    }, {
//        "name": "Jon Garcia",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/275936_10032456_514648534_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "634"
//    }, {
//        "name": "Ken Obray",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1076364_10034518_1481746056_q.jpg",
//        "current_location": {
//            "city": "Mesa",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.415",
//            "longitude": "-111.831",
//            "id": "104069826296214",
//            "name": "Mesa, Arizona"
//        },
//        "status": null,
//        "friend_count": "680"
//    }, {
//        "name": "Melynda Stock",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/1117764_10036042_264937810_q.jpg",
//        "current_location": {
//            "city": "Mesa",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.415",
//            "longitude": "-111.831",
//            "id": "104069826296214",
//            "name": "Mesa, Arizona"
//        },
//        "status": {
//            "message": "SANTA RITA WARD YOUTH: the Stock's and Wright's are chaperoning the stake dance tonight so you know it's gonna be a PARTY! Come out tonight and have some fun! 8pm at the stake center.",
//            "time": "1390673319",
//            "status_id": "10103333109708321",
//            "comment_count": "0"
//        },
//        "friend_count": "1135"
//    }, {
//        "name": "Ridhi Patel",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1118664_10037131_1695118725_q.jpg",
//        "current_location": {
//            "city": "Gilbert",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.35",
//            "longitude": "-111.789",
//            "id": "109449362414385",
//            "name": "Gilbert, Arizona"
//        },
//        "status": null,
//        "friend_count": "811"
//    }, {
//        "name": "Shauna Searle Crittenden",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/274178_10042711_1761026673_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "667"
//    }, {
//        "name": "Scott Owen",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1119172_10043120_1424174264_q.jpg",
//        "current_location": {
//            "city": "Gilbert",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.35",
//            "longitude": "-111.789",
//            "id": "109449362414385",
//            "name": "Gilbert, Arizona"
//        },
//        "status": null,
//        "friend_count": "811"
//    }, {
//        "name": "Chelsea Hatsumi",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t5\/211234_10052063_1336527220_q.jpg",
//        "current_location": {
//            "city": "Gilbert",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.35",
//            "longitude": "-111.789",
//            "id": "109449362414385",
//            "name": "Gilbert, Arizona"
//        },
//        "status": {
//            "message": "Warm sweet home! :)",
//            "time": "1390541687",
//            "status_id": "10103329101540721",
//            "comment_count": "0"
//        },
//        "friend_count": "267"
//    }, {
//        "name": "Craig Carroll",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/371702_10052664_1664842436_q.jpg",
//        "current_location": {
//            "city": "Tempe",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.4294",
//            "longitude": "-111.943",
//            "id": "112887355389124",
//            "name": "Tempe, Arizona"
//        },
//        "status": null,
//        "friend_count": "250"
//    }, {
//        "name": "Luke McInnis",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1117609_10052705_1148167348_q.jpg",
//        "current_location": {
//            "city": "New York",
//            "state": "New York",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.7167",
//            "longitude": "-74",
//            "id": "108424279189115",
//            "name": "New York, New York"
//        },
//        "status": null,
//        "friend_count": "310"
//    }, {
//        "name": "Kristin Kelly",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1119102_10053237_1804745611_q.jpg",
//        "current_location": {
//            "city": "Tulsa",
//            "state": "Oklahoma",
//            "country": "United States",
//            "zip": "",
//            "latitude": "36.1313",
//            "longitude": "-95.9373",
//            "id": "109436565740998",
//            "name": "Tulsa, Oklahoma"
//        },
//        "status": {
//            "message": "I realize and accept that loving inanimate objects is totally irrational. That being said, I love my restaurant. ",
//            "time": "1390634703",
//            "status_id": "10103332303968031",
//            "comment_count": "0"
//        },
//        "friend_count": "470"
//    }, {
//        "name": "Jesse Morrison",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/623709_10053698_1875866361_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "391"
//    }, {
//        "name": "Michelle Key",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/372639_10054231_314184666_q.jpg",
//        "current_location": null,
//        "status": {
//            "message": "Had an awesome weekend! Thank you to Andy Kulback, the LPRT and the wonderful tournament staff in Ohio for hosting such a great event. I'm extremely grateful that I have been given the opportunity to be able to play the sport that I love. Thank you To my sponsors; Ektelon and KeySports Arizona! I would also like to give a very special thank you to my parents Karen-Darold Key for everything you do for me. Most importantly I would like to thank Daniel De La Rosa, you inspire me every day to be the best I can be and I love you more and more every moment! Can't wait for the next tournament!!!",
//            "time": "1390769641",
//            "status_id": "10103336579055721",
//            "comment_count": "0"
//        },
//        "friend_count": "961"
//    }, {
//        "name": "Diana Lilly Mortensen",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/260827_10054427_158694184_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "533"
//    }, {
//        "name": "Caitlin Yount",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/1117779_10054603_2083796826_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "417"
//    }, {
//        "name": "Thien Quoc Pham-Tran",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/1086348_10054849_1390661722_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "2668"
//    }, {
//        "name": "Heikki Toivola",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1119269_10054874_761368098_q.jpg",
//        "current_location": {
//            "city": "Boston",
//            "state": "Massachusetts",
//            "country": "United States",
//            "zip": "",
//            "latitude": "42.3578",
//            "longitude": "-71.0617",
//            "id": "106003956105810",
//            "name": "Boston, Massachusetts"
//        },
//        "status": null,
//        "friend_count": "1001"
//    }, {
//        "name": "Shane Murphy",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1119119_10054966_157857487_q.jpg",
//        "current_location": {
//            "city": "Phoenix",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.4483",
//            "longitude": "-112.074",
//            "id": "105540216147364",
//            "name": "Phoenix, Arizona"
//        },
//        "status": {
//            "message": "What do you know?  Update an OS and delete 12 GBs of unused crap and your computer runs like a champ again!",
//            "time": "1390363349",
//            "status_id": "10103323541133821",
//            "comment_count": "0"
//        },
//        "friend_count": "381"
//    }, {
//        "name": "Amber Collins",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/276186_10055355_441902151_q.jpg",
//        "current_location": {
//            "city": "Gilbert",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.35",
//            "longitude": "-111.789",
//            "id": "109449362414385",
//            "name": "Gilbert, Arizona"
//        },
//        "status": null,
//        "friend_count": "197"
//    }, {
//        "name": "Rob Jensen",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc1\/t5\/368962_10055717_1412703029_q.jpg",
//        "current_location": {
//            "city": "Clarksville",
//            "state": "Tennessee",
//            "country": "United States",
//            "zip": "",
//            "latitude": "36.5297",
//            "longitude": "-87.3592",
//            "id": "108534305837795",
//            "name": "Clarksville, Tennessee"
//        },
//        "status": {
//            "message": "Less than a week... Soon there will be War. I'll be there, to continue the tradition, the standard, the Strike tastic AirAssault, 101st Airborne, Infantry leads the way, Army goes rolling on, Get it done, HOOHAA! AND, other words... Oh and I'll miss beer and sleep. But who doesn't miss beer?",
//            "time": "1390430085",
//            "status_id": "10103325375777181",
//            "comment_count": "0"
//        },
//        "friend_count": "194"
//    }, {
//        "name": "Jeremy Tam",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/274291_10056580_675103462_q.jpg",
//        "current_location": {
//            "city": "Tempe",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.4294",
//            "longitude": "-111.943",
//            "id": "112887355389124",
//            "name": "Tempe, Arizona"
//        },
//        "status": null,
//        "friend_count": "602"
//    }, {
//        "name": "Diana McNeely",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/1086302_10057866_239580474_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "263"
//    }, {
//        "name": "Steven Needham",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/174156_10119787_1826399146_q.jpg",
//        "current_location": {
//            "city": "Gilbert",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.35",
//            "longitude": "-111.789",
//            "id": "109449362414385",
//            "name": "Gilbert, Arizona"
//        },
//        "status": null,
//        "friend_count": "391"
//    }, {
//        "name": "Lindsey Ishikiwi",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/1076897_10123294_893148922_q.jpg",
//        "current_location": {
//            "city": "Phoenix",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.4483",
//            "longitude": "-112.074",
//            "id": "105540216147364",
//            "name": "Phoenix, Arizona"
//        },
//        "status": null,
//        "friend_count": "613"
//    }, {
//        "name": "Alysha Martella",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t5\/572941_10133321_1547143231_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1213"
//    }, {
//        "name": "Ken Peng",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/49592_10133832_1627020292_q.jpg",
//        "current_location": {
//            "city": "Tucson",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "32.2217",
//            "longitude": "-110.926",
//            "id": "109570449061083",
//            "name": "Tucson, Arizona"
//        },
//        "status": null,
//        "friend_count": "366"
//    }, {
//        "name": "Ariel Michal Cooper",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1076928_10134964_1765888376_q.jpg",
//        "current_location": {
//            "city": "Pullman",
//            "state": "Washington",
//            "country": "United States",
//            "zip": "",
//            "latitude": "46.7326",
//            "longitude": "-117.172",
//            "id": "105722109462353",
//            "name": "Pullman, Washington"
//        },
//        "status": {
//            "message": "This is my obligatory facebook status update about passing NAVLE (national veterinary boards). Apologies to my classmates who took the exam through Washington state and have to wait to find out by snail mail.",
//            "time": "1390451359",
//            "status_id": "10102545907218422",
//            "comment_count": "0"
//        },
//        "friend_count": "497"
//    }, {
//        "name": "Ashley Parks",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1118809_10134991_255300563_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "573"
//    }, {
//        "name": "Alex Wright Rodriguez",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1118052_10135319_1234013791_q.jpg",
//        "current_location": {
//            "city": "Scottsdale",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.4931",
//            "longitude": "-111.926",
//            "id": "109523849065491",
//            "name": "Scottsdale, Arizona"
//        },
//        "status": {
//            "message": "I'm so sore I can't lift my arms. Went a little crazy at the gym yesterday and I'm pretty sure I won't be able to move for the next 2 days.",
//            "time": "1390689490",
//            "status_id": "10102551475065412",
//            "comment_count": "0"
//        },
//        "friend_count": "616"
//    }, {
//        "name": "Zaynah Chowdhury",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1076494_10135600_1337893454_q.jpg",
//        "current_location": {
//            "city": "Baltimore",
//            "state": "Maryland",
//            "country": "United States",
//            "zip": "",
//            "latitude": "39.2833",
//            "longitude": "-76.6167",
//            "id": "112438218775062",
//            "name": "Baltimore, Maryland"
//        },
//        "status": null,
//        "friend_count": null
//    }, {
//        "name": "Jeffrey Bacigalupo",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/573665_10136184_450366059_q.jpg",
//        "current_location": {
//            "city": "Tucson",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "32.2217",
//            "longitude": "-110.926",
//            "id": "109570449061083",
//            "name": "Tucson, Arizona"
//        },
//        "status": null,
//        "friend_count": "673"
//    }, {
//        "name": "Heidi Kum",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1118630_10136809_2014251702_q.jpg",
//        "current_location": null,
//        "status": {
//            "message": "It's been a long time seeing the sun and having it glare in my eyes...in 9 degree weather....",
//            "time": "1390568106",
//            "status_id": "10102548481893752",
//            "comment_count": "0"
//        },
//        "friend_count": "208"
//    }, {
//        "name": "Ashley Grill",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1086441_10137084_477917322_q.jpg",
//        "current_location": {
//            "city": "Wasilla",
//            "state": "Alaska",
//            "country": "United States",
//            "zip": "",
//            "latitude": "61.5817",
//            "longitude": "-149.453",
//            "id": "105575526141581",
//            "name": "Wasilla, Alaska"
//        },
//        "status": {
//            "message": "We had so much fun hiking today in 50 degree weather, found an amazing trail on top of a ridge with fantastic views of all the mountains.  Lexie completely wore herself out by running ahead of us about 100 ft and then running back again at full speed, over and over again.  Found a bunch of geocaches, too!  I am paying for it now though, may have overdone it a bit, ouchies!!  \u003C3 Alaska so much!",
//            "time": "1390876485",
//            "status_id": "10102556989155132",
//            "comment_count": "0"
//        },
//        "friend_count": "368"
//    }, {
//        "name": "Kristen Frederick",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/275057_10137468_696483462_q.jpg",
//        "current_location": {
//            "city": "Queen Creek",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.2405",
//            "longitude": "-111.643",
//            "id": "111784395504917",
//            "name": "Queen Creek, Arizona"
//        },
//        "status": {
//            "message": "Blah",
//            "time": "1390873809",
//            "status_id": "10102556870966982",
//            "comment_count": "0"
//        },
//        "friend_count": "260"
//    }, {
//        "name": "Tamra Kasprzyk",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/274271_10137534_1355337064_q.jpg",
//        "current_location": {
//            "city": "Tucson",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "32.2217",
//            "longitude": "-110.926",
//            "id": "109570449061083",
//            "name": "Tucson, Arizona"
//        },
//        "status": null,
//        "friend_count": "921"
//    }, {
//        "name": "John Dohyung Kwon",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/static-ak\/rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif",
//        "current_location": null,
//        "status": null,
//        "friend_count": "78"
//    }, {
//        "name": "Liesl Burger",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/157211_10139116_1243165938_q.jpg",
//        "current_location": {
//            "city": "Gilbert",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.35",
//            "longitude": "-111.789",
//            "id": "109449362414385",
//            "name": "Gilbert, Arizona"
//        },
//        "status": null,
//        "friend_count": "413"
//    }, {
//        "name": "Jennifer Hubbard",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t5\/371357_10139397_341390789_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "79"
//    }, {
//        "name": "Stephanie Balliet",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/211283_10140157_2063587443_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "166"
//    }, {
//        "name": "Drew Ignatowski",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1116977_10141103_1966997568_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "814"
//    }, {
//        "name": "Ekta Bajaj",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1118116_10515012_1091476682_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "842"
//    }, {
//        "name": "Tyler Owens",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1118167_11610127_1289802615_q.jpg",
//        "current_location": {
//            "city": "Pomona",
//            "state": "California",
//            "country": "United States",
//            "zip": "",
//            "latitude": "34.0608",
//            "longitude": "-117.756",
//            "id": "112639765414430",
//            "name": "Pomona, California"
//        },
//        "status": null,
//        "friend_count": "981"
//    }, {
//        "name": "Lauren Skidmore",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/1117675_17800019_223467443_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "531"
//    }, {
//        "name": "Dan Sullivan",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/273289_17800762_306073823_q.jpg",
//        "current_location": {
//            "city": "Cambridge",
//            "state": "Massachusetts",
//            "country": "United States",
//            "zip": "",
//            "latitude": "42.3737",
//            "longitude": "-71.1106",
//            "id": "108056275889020",
//            "name": "Cambridge, Massachusetts"
//        },
//        "status": null,
//        "friend_count": "527"
//    }, {
//        "name": "Christopher Koontz",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1119103_17801029_636045982_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "654"
//    }, {
//        "name": "Cynthia Lew",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1118504_17801607_82379856_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "1131"
//    }, {
//        "name": "Chad Bennett",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/372513_17802226_425948030_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1935"
//    }, {
//        "name": "Kirk Hill",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t5\/41374_17802872_794_q.jpg",
//        "current_location": {
//            "city": "Pearland",
//            "state": "Texas",
//            "country": "United States",
//            "zip": "",
//            "latitude": "29.5543",
//            "longitude": "-95.296",
//            "id": "109297442421359",
//            "name": "Pearland, Texas"
//        },
//        "status": null,
//        "friend_count": "183"
//    }, {
//        "name": "Joseph 'Moses' Craven",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/372074_17803104_1870588520_q.jpg",
//        "current_location": {
//            "city": "Ardmore",
//            "state": "Oklahoma",
//            "country": "United States",
//            "zip": "",
//            "latitude": "34.1812",
//            "longitude": "-97.1294",
//            "id": "107705532592043",
//            "name": "Ardmore, Oklahoma"
//        },
//        "status": null,
//        "friend_count": "707"
//    }, {
//        "name": "Jonathan Brimhall",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/371310_17803154_1932549238_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "2035"
//    }, {
//        "name": "Rachel Smith",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/368962_17805150_1247633617_q.jpg",
//        "current_location": {
//            "city": "Orem",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2988",
//            "longitude": "-111.696",
//            "id": "103787786326610",
//            "name": "Orem, Utah"
//        },
//        "status": {
//            "message": "Seeing the Sacred Gifts exhibit",
//            "time": "1390871894",
//            "status_id": "10101270892603009",
//            "comment_count": "0"
//        },
//        "friend_count": "347"
//    }, {
//        "name": "Jeremy James",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/261035_17806007_1068091327_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "559"
//    }, {
//        "name": "Melanie Hogg Barber",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1118243_17806124_1326153548_q.jpg",
//        "current_location": {
//            "city": "Maple Valley",
//            "state": "Washington",
//            "country": "United States",
//            "zip": "",
//            "latitude": "47.3662",
//            "longitude": "-122.045",
//            "id": "105616046138150",
//            "name": "Maple Valley, Washington"
//        },
//        "status": null,
//        "friend_count": "1048"
//    }, {
//        "name": "Heather Clouse",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/623637_17808188_847129617_q.jpg",
//        "current_location": {
//            "city": "Orem",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2988",
//            "longitude": "-111.696",
//            "id": "103787786326610",
//            "name": "Orem, Utah"
//        },
//        "status": null,
//        "friend_count": "370"
//    }, {
//        "name": "Matt Olson",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/187330_17808503_965029476_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "992"
//    }, {
//        "name": "Jeff Schwarting",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/211590_17808584_542081072_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "1350"
//    }, {
//        "name": "Eric Ringer",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1119105_17809149_131282747_q.jpg",
//        "current_location": {
//            "city": "San Francisco",
//            "state": "California",
//            "country": "United States",
//            "zip": "",
//            "latitude": "37.7793",
//            "longitude": "-122.419",
//            "id": "114952118516947",
//            "name": "San Francisco, California"
//        },
//        "status": null,
//        "friend_count": "888"
//    }, {
//        "name": "Katie Younger",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/211364_17809172_918103303_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1775"
//    }, {
//        "name": "Jesse Moore",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1116985_17809492_1825225396_q.jpg",
//        "current_location": {
//            "city": "Salt Lake City",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.75",
//            "longitude": "-111.883",
//            "id": "106057819434480",
//            "name": "Salt Lake City, Utah"
//        },
//        "status": null,
//        "friend_count": "984"
//    }, {
//        "name": "Jake Brandenburg",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t5\/211333_17809507_123578831_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "2052"
//    }, {
//        "name": "Scott Woodland",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/275710_17809662_355286192_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1634"
//    }, {
//        "name": "Sarah McCormick",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/1083106_17809770_2137663451_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "853"
//    }, {
//        "name": "Bryson Jones",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1117556_17810630_1197641565_q.jpg",
//        "current_location": {
//            "city": "Mesa",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.415",
//            "longitude": "-111.831",
//            "id": "104069826296214",
//            "name": "Mesa, Arizona"
//        },
//        "status": null,
//        "friend_count": "1250"
//    }, {
//        "name": "Zac Oleskey",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/371163_17810875_1870959358_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "428"
//    }, {
//        "name": "Joel Gardner",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/275556_17811336_577754819_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "516"
//    }, {
//        "name": "Cary Crall",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/260725_17813291_1909652163_q.jpg",
//        "current_location": {
//            "city": "Cambridge",
//            "state": "Massachusetts",
//            "country": "United States",
//            "zip": "",
//            "latitude": "42.3737",
//            "longitude": "-71.1106",
//            "id": "108056275889020",
//            "name": "Cambridge, Massachusetts"
//        },
//        "status": null,
//        "friend_count": "2003"
//    }, {
//        "name": "Lance Winward",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t5\/161188_17813334_4416158_q.jpg",
//        "current_location": {
//            "city": "American Fork",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.3842",
//            "longitude": "-111.792",
//            "id": "105675929465006",
//            "name": "American Fork, Utah"
//        },
//        "status": null,
//        "friend_count": "477"
//    }, {
//        "name": "Tierra Jones",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/1117373_17813822_1148037197_q.jpg",
//        "current_location": {
//            "city": "Mesa",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.415",
//            "longitude": "-111.831",
//            "id": "104069826296214",
//            "name": "Mesa, Arizona"
//        },
//        "status": null,
//        "friend_count": "1011"
//    }, {
//        "name": "David Lee",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc1\/t5\/372255_17814020_2100528589_q.jpg",
//        "current_location": {
//            "city": "Los Angeles",
//            "state": "California",
//            "country": "United States",
//            "zip": "",
//            "latitude": "34.05",
//            "longitude": "-118.25",
//            "id": "110970792260960",
//            "name": "Los Angeles, California"
//        },
//        "status": null,
//        "friend_count": "418"
//    }, {
//        "name": "JD Clark",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/276075_17814064_647271890_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "664"
//    }, {
//        "name": "Spencer Mooso",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1076291_17814202_641324374_q.jpg",
//        "current_location": {
//            "city": "Lehi",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.4017",
//            "longitude": "-111.859",
//            "id": "105988932766243",
//            "name": "Lehi, Utah"
//        },
//        "status": null,
//        "friend_count": "577"
//    }, {
//        "name": "Jordan Wight",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1116389_17814298_1242878059_q.jpg",
//        "current_location": {
//            "city": "San Francisco",
//            "state": "California",
//            "country": "United States",
//            "zip": "",
//            "latitude": "37.7793",
//            "longitude": "-122.419",
//            "id": "114952118516947",
//            "name": "San Francisco, California"
//        },
//        "status": {
//            "message": "Pretty amazing surf today",
//            "time": "1390592707",
//            "status_id": "10101266606826739",
//            "comment_count": "0"
//        },
//        "friend_count": "852"
//    }, {
//        "name": "Corinne Kennard McCleve",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/1118430_17814395_941638698_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": {
//            "message": "Anybody ever received text conversations that look like they are from you to someone else, but you didn't actually write them? I'm starting to get a little creeped out....where are these coming from???!",
//            "time": "1390786530",
//            "status_id": "10101269537294059",
//            "comment_count": "0"
//        },
//        "friend_count": "1052"
//    }, {
//        "name": "Andrew Wiggins",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/186785_17814602_1643545710_q.jpg",
//        "current_location": {
//            "city": "Salt Lake City",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.75",
//            "longitude": "-111.883",
//            "id": "106057819434480",
//            "name": "Salt Lake City, Utah"
//        },
//        "status": null,
//        "friend_count": "657"
//    }, {
//        "name": "Brittany Brown",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/276284_17814624_766798593_q.jpg",
//        "current_location": null,
//        "status": {
//            "message": "I heard people have been praying for snow in the mountains. So I did my part and got my car washed today.",
//            "time": "1390606868",
//            "status_id": "10101266964554849",
//            "comment_count": "0"
//        },
//        "friend_count": "705"
//    }, {
//        "name": "Nick Petersen",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/t5\/202884_17814683_300937051_q.jpg",
//        "current_location": {
//            "city": "Jupiter",
//            "state": "Florida",
//            "country": "United States",
//            "zip": "",
//            "latitude": "26.926",
//            "longitude": "-80.105",
//            "id": "109307099087536",
//            "name": "Jupiter, Florida"
//        },
//        "status": null,
//        "friend_count": "725"
//    }, {
//        "name": "Jeffrey Swindle",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/211601_17815112_1710482679_q.jpg",
//        "current_location": {
//            "city": "Ann Arbor",
//            "state": "Michigan",
//            "country": "United States",
//            "zip": "",
//            "latitude": "42.2745",
//            "longitude": "-83.7393",
//            "id": "105479049486624",
//            "name": "Ann Arbor, Michigan"
//        },
//        "status": null,
//        "friend_count": "1154"
//    }, {
//        "name": "Rachel Dodge",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/1115721_17815285_836073507_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1025"
//    }, {
//        "name": "Jeffrey Schwicht",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t5\/70352_17815829_1080602833_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "543"
//    }, {
//        "name": "Brady Toone",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/371305_17815953_1827412819_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1623"
//    }, {
//        "name": "Travis Epperson",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/187078_17816042_3304316_q.jpg",
//        "current_location": {
//            "city": "Phoenix",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.4483",
//            "longitude": "-112.074",
//            "id": "105540216147364",
//            "name": "Phoenix, Arizona"
//        },
//        "status": null,
//        "friend_count": null
//    }, {
//        "name": "Dave McClure",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/27416_17816719_71_q.jpg",
//        "current_location": {
//            "city": "Ann Arbor",
//            "state": "Michigan",
//            "country": "United States",
//            "zip": "",
//            "latitude": "42.2745",
//            "longitude": "-83.7393",
//            "id": "105479049486624",
//            "name": "Ann Arbor, Michigan"
//        },
//        "status": null,
//        "friend_count": "762"
//    }, {
//        "name": "Braden Price",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/276206_17816878_245460838_q.jpg",
//        "current_location": {
//            "city": "Glendale",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.5386",
//            "longitude": "-112.186",
//            "id": "104002769637127",
//            "name": "Glendale, Arizona"
//        },
//        "status": {
//            "message": "Thanks to everyone for the birthday wishes! Yet again I'm astounded by the caliber of people I get to associate with.",
//            "time": "1390668599",
//            "status_id": "10101267782211259",
//            "comment_count": "0"
//        },
//        "friend_count": "1067"
//    }, {
//        "name": "Matt LeGare",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/195517_17816894_384186_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "346"
//    }, {
//        "name": "Eric Newman",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1076641_17817228_707340978_q.jpg",
//        "current_location": {
//            "city": "Elk Ridge",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.0156",
//            "longitude": "-111.682",
//            "id": "107571982605958",
//            "name": "Elk Ridge, Utah"
//        },
//        "status": null,
//        "friend_count": "253"
//    }, {
//        "name": "Kiku Reidhead",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/1117075_17817251_1266041666_q.jpg",
//        "current_location": {
//            "city": "Portland",
//            "state": "Oregon",
//            "country": "United States",
//            "zip": "",
//            "latitude": "45.52",
//            "longitude": "-122.682",
//            "id": "112548152092705",
//            "name": "Portland, Oregon"
//        },
//        "status": null,
//        "friend_count": "1197"
//    }, {
//        "name": "Mika Sawada Permenter",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/572551_17817871_925717657_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "1344"
//    }, {
//        "name": "Kris Paries",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/195669_17818211_1809840071_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "1110"
//    }, {
//        "name": "Karla Jensen Pratt",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/173707_17818839_4084230_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "849"
//    }, {
//        "name": "Scott Weinert",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash1\/370359_17819953_1819531589_q.jpg",
//        "current_location": null,
//        "status": null,
//        "friend_count": "993"
//    }, {
//        "name": "Trevor Cox",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/260832_17820258_592491547_q.jpg",
//        "current_location": {
//            "city": "Mesa",
//            "state": "Arizona",
//            "country": "United States",
//            "zip": "",
//            "latitude": "33.415",
//            "longitude": "-111.831",
//            "id": "104069826296214",
//            "name": "Mesa, Arizona"
//        },
//        "status": null,
//        "friend_count": "1308"
//    }, {
//        "name": "Taka Yanagita",
//        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t5\/1118497_17820455_828031541_q.jpg",
//        "current_location": {
//            "city": "Provo",
//            "state": "Utah",
//            "country": "United States",
//            "zip": "",
//            "latitude": "40.2444",
//            "longitude": "-111.661",
//            "id": "106066949424984",
//            "name": "Provo, Utah"
//        },
//        "status": null,
//        "friend_count": "1004"
//}]
