import NetInfo from "@react-native-community/netinfo";
import { store } from '../../redux/store/index'
import { removeUser } from '../../redux/actions';




//check network is available or not
export const CheckNet = async () => {
  const value = await NetInfo.fetch().then(val => { return val.isConnected });
  return value
};


//check email is valid or not
export const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


export const RemoveDec = (value) => {
  return value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
};

export const validatePass = (value) => {
  var Pass_REGEX = re = /^(?=.*[A-Z]+)(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
  return Pass_REGEX.test(value);
};

//removing duplicates form the array using set
export function removeDuplicates(a) {
  return Array.from(new Set(a.map(JSON.stringify))).map(JSON.parse);
}

export function LoadMore(Arr, until) {
  let arr = []
  Arr.map((item, index) => {
    if (index < until) {
      arr.push(item)
    }
  })
  return arr
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


export const GetParentStoreData = () => {
  const S = store.getState();
  if (S && S.Child && S.Child.ChildData && S.Child.ChildData.length != 0)
    return S.Child.ChildData
}


export const resetStack = (props, name) => {
  props.navigation.reset({ index: 0, routes: [{ name: name }] })
}

export const navigateTo = (props, name) => { props.navigation.navigate(name) }
