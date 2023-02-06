import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, ImageBackground, Keyboard, TextInput} from 'react-native';
import {
  DispatchData,
  GetLangData,
  resetStack,
  validateEmail,
  validatePass,
} from '../../utils/commonFun';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {setUser} from '../../redux/actions';
import CommonButton from '../../components/commonButton';
import CommonInput from '../../components/commonInput';
import colors from '../../utils/colors';
import styles from '../../utils/styles';
import config from '../../utils/config/index/index';
import {useTranslation} from 'react-i18next';
import CommonImage from '../../components/commonImage';
import {MOVIE_SCREEN} from '../../route/index';

//Login screen
const LoginScreen = (props: any) => {
  const {t, i18n} = useTranslation();
  const lang = i18n.language;

  //get the reference of Inputs
  const emailRef = React.useRef<TextInput | null>(null);
  const passRef = React.useRef<TextInput | null>(null);

  const [state, setState] = useState({
    email: '',
    emailError: '',
    password: '',
    passError: '',
    loading: false,
    btnDisabled: true,
  });


  //Getting language data
  useEffect(() => {
    checkLangData();
  }, []);

  //check default lang data and change language according to the redux
  const checkLangData = async () => {
    const lang = GetLangData();
    console.log('------',lang )
    i18n.changeLanguage(lang.data);
  };

  //saving User data via Common function
  const handleAddUserData = () => {
    let data = {name: state.email, pass: state.password};
    DispatchData(setUser(data));
    resetStack(props, MOVIE_SCREEN);
  };

  //Validion of fields
  const onValidateLoginFields = () => {
    // Do something about login operation
    Keyboard.dismiss();

    let emailValid = validateEmail(state.email);

    let passValid = validatePass(state.password);

    if (!state.email && passValid) {
      setState({
        ...state,
        emailError: t('emailRequired'),
        passError: '',
        btnDisabled: true,
      });
      return;
    }

    if (state.email && !emailValid) {
      setState({
        ...state,
        emailError: t('emailValid'),
        passError: '',
        btnDisabled: true,
      });
      return;
    }

    if (!state.password && emailValid) {
      setState({
        ...state,
        passError: t('passwordRequired'),
        emailError: '',
        btnDisabled: true,
      });
      return;
    }

    if (state.password && !passValid) {
      setState({
        ...state,
        passError: t('passwordValid'),
        emailError: '',
        btnDisabled: true,
      });
      return;
    }

    if (state.email && state.password && emailValid && passValid) {
      setState({...state, passError: '', emailError: '', btnDisabled: false});

      //Given timeout, so that user ewill see loading for 2 second
      setTimeout(() => {
        setState({...state, loading: true});
      }, 2000);
      //Given timeout, so that user ewill see loading for 2 second
      setTimeout(() => {
        setState({...state, loading: false});
        handleAddUserData();
      }, 3000);
    }
  };

  // Do something about login operation (Button Click)
  const onPressLogin = () => {
    onValidateLoginFields();
  };

  //Logo Image
  const LogoImage = useCallback(() => {
    return (
      <View style={styles.flex03AlignCenter}>
        <Text style={styles.screenTitleLogin}>{t('LoginScreen')}</Text>
        <View style={styles.languageLogoContainer}>
          <CommonImage
            source={config.tmdbLogoImage}
            imgStyle={styles.LoginImgLogoStyle}
          />
        </View>
      </View>
    );
  }, []);

  //Press outside the input view
  const backDropPress = () => {
    onValidateLoginFields();
    return true;
  };

  const emailOnSubmit = () => {
    onValidateLoginFields();
    passRef.current?.focus();
  };
  const emailOnChange = (text: any) =>
    setState({...state, email: text, emailError: ''});
  const passOnChange = (text: any) =>
    setState({...state, password: text, passError: ''});

  //2 inputs and 1 submit button for saving the user data.
  let emailIcon = {type: 'material-community', name: 'email-edit-outline'};
  let passIcon = {type: 'material', name: 'lock-outline'};

  let eng = lang === 'en';

  return (
    <ImageBackground source={config.backgroundImage} style={styles.fl1}>
      <SafeAreaView
        onStartShouldSetResponder={backDropPress}
        style={styles.fl1}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          onResponderRelease={Keyboard.dismiss}
          automaticallyAdjustKeyboardInsets={true}>
          <LogoImage />

          <View style={[styles.flex07, styles.mh_15]}>
            <CommonInput
              placeholder={t('email')}
              inputRef={emailRef}
              value={state.email}
              label={t('email')}
              keyboardType="email-address"
              leftIcon={eng && emailIcon}
              rightIcon={!eng && emailIcon}
              inputStyle={!eng && styles.textAlignRight}
              errorMessage={state.emailError}
              returnKeyType="next"
              onSubmitEditing={emailOnSubmit}
              onChangeText={emailOnChange}
              labelStyle={{
                color: state.email ? colors.InputLabel : colors.trans,
              }}
            />

            <CommonInput
              placeholder={t('password')}
              inputRef={passRef}
              secureTextEntry
              value={state.password}
              maxLength={15}
              label={t('password')}
              leftIcon={eng && passIcon}
              rightIcon={!eng && passIcon}
              inputStyle={!eng && styles.textAlignRight}
              errorMessage={state.passError}
              returnKeyType="done"
              onSubmitEditing={backDropPress}
              onChangeText={passOnChange}
              labelStyle={{
                color: state.password ? colors.InputLabel : colors.trans,
              }}
            />

            <CommonButton
              title={t('login')}
              loading={state.loading}
              onPress={onPressLogin}
              disabled={state.btnDisabled}
            />
          </View>

          <View style={styles.h50} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;
