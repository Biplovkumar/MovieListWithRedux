/* eslint-disable prettier/prettier */
import { Alert } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
// import { useSelector } from 'react-redux'
import { store, persistor } from '../../redux/store/index'
import { removeUser } from '../../redux/actions';





// export const CheckNet = async () => {
//   const value = await NetInfo.fetch().then(val => { return val.isConnected });
//   return value
// };



export const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//Valdation for testing the Mobile
export const validateMobile = (mobile_number) => {
  var re = /^[6-9][0-9]{9}$/;
  return re.test(mobile_number);
};


export const validateDigit = (val) => {
  var re = /^\d+$/;
  return re.test(val);
};

export const validatePin = (val) => {
  var re = /^\d{6}$/;
  return re.test(val);
};

export const validateYear = (valN) => {
  let val = 0
  if (valN) { val = valN.trim() }
  let result = false
  console.log('validateYear', val);
  var reg = /^\d{4}$/;
  result = reg.test(val) && (1900 <= val && val <= (new Date()).getFullYear())
  // console.log('validateYear1', reg.test(val), 1900 <= val, val <= (new Date()).getFullYear());
  // result = String(val).length == 4 && !isNaN(val) && (1900 <= val && val <= (new Date()).getFullYear())
  // console.log('validateYear1',String(val).length , String(val).length == 4, !isNaN(val), 1900 <= val, val <= (new Date()).getFullYear());
  return result;
};



export const RemoveDec = (value) => {
  return value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
};


export const validateName = (value) => {
  var Name_REGEX = re = /[*|\":<>[\]{}`\\()';@&$]/;
  return Name_REGEX.test(value);
};

export const validatePass = (value) => {
  // var Pass_REGEX = re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  // var Pass_REGEX = re = /^(?=.*[a-z0-9A-Z]+)(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
  var Pass_REGEX = re = /^(?=.*[A-Z]+)(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
  return Pass_REGEX.test(value);
};



//.webm,.m4v,.mpv,.mkv,.mp4,.m4p,.mpg,.mp2,.mpeg,.mpe,.flv,.swf,.avchd,.ogg,.avi,.wmv,.mov,.qt
export const isVideo = (URL) => {
  let VideoAvailable = false
  if (URL.includes('.webm') || URL.includes('.m4v') || URL.includes('.mpv') || URL.includes('.mkv') || URL.includes('.mp4') || URL.includes('.m4p') || URL.includes('.mpg') || URL.includes('.mp2') || URL.includes('.mpeg') || URL.includes('.mpe') || URL.includes('.flv') || URL.includes('.swf') || URL.includes('.avchd') || URL.includes('.ogg') || URL.includes('.avi') || URL.includes('.wmv') || URL.includes('.mov') || URL.includes('.qt') || URL.includes('audio/mpeg')) {
    VideoAvailable = true
  } else { VideoAvailable = false }
  return VideoAvailable;
};

//.jpeg , .jpg, .png, .gif, .tiff
export const isImage = (URL) => {
  let ImageAvailable = false
  if (URL.includes('.jpeg') || URL.includes('.jpg') || URL.includes('.png') || URL.includes('.gif') || URL.includes('.tiff') || URL.includes('.HEIC')) {
    ImageAvailable = true
  } else { ImageAvailable = false }
  return ImageAvailable;
};




export const showOKAlert = (Title, Content) => {
  Alert.alert(
    Title,
    Content,
    [
      { text: 'OK', onPress: () => console.log("aaa") },
    ],
    { cancelable: false }
  )
}

//removing duplicates form the array using set
export function removeDuplicates(a) {
  return Array.from(new Set(a.map(JSON.stringify))).map(JSON.parse);
}



export const findMinMax = (arr) => {
  let min = arr[0].package_amount, max = arr[0].package_amount;
  for (let i = 1, len = arr.length; i < len; i++) {
    let v = arr[i].package_amount;
    min = (v < min) ? v : min;
    max = (v > max) ? v : max;
  }

  return [min, max];
}

export const sortBy = (FTRIres, SortBy) => {
  var instituteList = FTRIres;
  var FinalList = []
  if (SortBy && SortBy === 'low_to_high') {
    var instituteListLowToHigh = instituteList.sort((a, b) => parseInt(a.package_min_amount) - parseInt(b.package_min_amount));
    FinalList = instituteListLowToHigh
  }
  else if (SortBy && SortBy === 'high_to_low') {
    var instituteListHighToLow = instituteList.sort((a, b) => parseInt(b.package_min_amount) - parseInt(a.package_min_amount));
    FinalList = instituteListHighToLow
  }
  else { FinalList = FTRIres }
  return FinalList;
}

export const CapitalizeName = (name) => {
  let i = 0;
  let val = true;
  let localname = '';
  let Name = ''
  if (name) {
    Name = name.toString()
  }
  if (Name) {
    for (i = 0; i < Name.length; i++) {
      if (val) {
        let v = Name.substring(i, i + 1).charAt(0).toUpperCase();
        localname = localname + v;
        val = false;
      }
      else {
        localname = localname + Name.substring(i, i + 1)
      }
      if (Name.substring(i, i + 1) == ' ') {
        val = true;
      }
    }
  }
  else {
    localname = ''
  }
  return localname;
}

export const calculateDistance = (instiLat, instiLong, Lat, Long, unit) => {
  var lat1 = Lat;
  var lon1 = Long;
  var lat2 = instiLat;
  var lon2 = instiLong;
  // let lat1 = "28.6428915"//T9L
  // let lon1 = "77.2190894"
  // var lat2  = "28.4040854";//NDLS
  // var lon2  = "77.2996861";
  // let unit = "K"
  var radlat1 = Math.PI * lat1 / 180
  var radlat2 = Math.PI * lat2 / 180
  var theta = lon1 - lon2
  var radtheta = Math.PI * theta / 180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  if (unit == "K") { dist = dist * 1.609344 }
  if (unit == "M") { dist = dist * 0.8684 }
  console.log('distance is ', dist);
  return Math.round(dist)
}

// NameN = Name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});



export function getFormatedDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate();
  let year = "" + d.getFullYear();
  if (day.length < 2) day = "0" + day;
  if (month.length < 2) month = "0" + month;
  // let s = month + ' ' + day;
  return [day, month, year].join("/");
}

export const getformateTime = (date) => {
  var date1 = new Date(date);
  var tz = date1.getTimezoneOffset();
  var data = new Date(date1.getTime() + tz * 60000);
  let hours = data.getHours();

  let min = data.getMinutes();

  let aa = "PM";

  if (hours < 12) {
    aa = "AM";
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  let time = hours + ":" + min + aa;

  return time;
};






export function LoadMore(Arr, until) {
  let arr = []
  Arr.map((item, index) => {
    if (index < until) {
      arr.push(item)
    }
  })
  return arr
}



export const FivePercent = (givenPrice) => {
  if (givenPrice > 0) {
    let price = givenPrice
    let div = 0.05
    let res = price * div
    let dis = price - res
    return dis

  }
  return givenPrice

}


export const GetStoreData = () => {
  const S = store.getState();
  if (S && S.login && S.login.data && Object.keys(S.login.data).length != 0)
    return S.login.data
}

export const GetLangData = () => {
  const S = store.getState();
  if (S && S.lang && S.lang.data && Object.keys(S.lang.data).length != 0)
    return S.lang.data
}



export const DispatchData = (data) => {
  const S = store.dispatch(data);
  return S
}

export const RemoveData = (data) => {
  const S = store.dispatch(removeUser());
  return S
}


export const CalCulateHour = (value, sessionduration) => {
  var Hours = "";
  if (parseFloat(sessionduration) == 30) {
    if (value.includes(":30")) {
      Hours = 1.0;
    } else {
      Hours = parseFloat(sessionduration) / 100;
    }
  } else if (parseFloat(sessionduration) == 90) {
    if (value.includes(":30")) {
      Hours = 2.0;
    } else {
      Hours = 1.3;
    }
  } else if (parseFloat(sessionduration) == 60) {
    if (value.includes(":30")) {
      Hours = 1.3;
    } else {
      Hours = 1.0;
    }
  } else {
    if (value.includes(":30")) {
      Hours = 2.3;
    } else {
      Hours = 2.0;
    }
  }
  return Hours;
};


export const getDay = (date) => {
  var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const d = new Date(date);
  const dayName = days[d.getDay()];
  return dayName
}



export const formatDate = (date, format) => {
  if (date !== null && date !== undefined) {
    let date1 = new Date(date);
    let dd = date1.getDate();
    let mm = date1.getMonth() + 1;
    let mmm = date1.toLocaleString('default', { month: 'short' })
    let yyyy = date1.getFullYear();
    console.log(dd, mmm, yyyy)
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    switch (format) {
      case "YYYY-MM-DD":
        date1 = yyyy + "-" + mm + "-" + dd;
        break;
      case "DD-MMM,YYYY": {
        console.log("Worked Hwerree", dd + " " + mmm + "," + yyyy)
        date1 = dd + " " + mmm + "," + yyyy;
      }
        break;
      case "DD,MMM-YYYY":
        date1 = dd + "," + mmm + " " + yyyy;
        break;
      default:
        date1 = mm + "/" + dd + "/" + yyyy;
    }
    console.log(date1, "dattetet")
    return date1;
    // return (date1 = mm + "/" + dd + "/" + yyyy);
  }
}

export const RemoveHtmlTag = (htmlString) => {
  var stripedHtml = htmlString.replace(/<[^>]+>/g, '');
  return stripedHtml
}
// let res=ReplaceMethod(d,'&nbsp;')


export const ReplaceMethod = (htmlString, n) => {
  var re = new RegExp(n, "g");
  var stripedHtml = htmlString.replace(re, " ");
  return stripedHtml
}



export const RemoveSpaceTag = (htmlString) => {
  let space = '&nbsp;';
  let space1 = '&quot;';
  var stripedHtml = htmlString.replace(/<[^>]+>/g, '');
  var re = new RegExp(space, "g");
  var re1 = new RegExp(space1, "g");
  var final = stripedHtml.replace(re, " ");
  final = final.replace(re1, " ");
  return final
}



export const SortDateFunc = (Arr, temp) => {
  Arr.sort(function (a, b) {
    return new Date(a.temp) - new Date(b.temp);
  });
  return Arr
}



export const GetParentStoreData = () => {
  const S = store.getState();
  if (S && S.Child && S.Child.ChildData && S.Child.ChildData.length != 0)
    return S.Child.ChildData
}


export const resetStack = (props, name) => {
  props.navigation.reset({ index: 0, routes: [{ name: name }] })
}

export const navigateTo = (props, name) => { props.navigation.navigate(name) }
