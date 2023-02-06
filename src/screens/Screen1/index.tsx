import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Keyboard,
  TextInput
} from 'react-native';
import { DispatchData, resetStack, validateEmail, validatePass } from '../../utils/commonFun';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { setUser } from '../../redux/actions';
import CommonButton from '../../components/commonButton';
import CommonInput from '../../components/commonInput';
import colors from '../../utils/colors';
import styles from '../../utils/styles';
import config from '../../utils/config/index';
import { useTranslation } from 'react-i18next';
import CommonImage from '../../components/commonImage';
import { SCREEN2 } from '../../route/index';





const Screen1 = (props: any) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language
  const emailRef = React.useRef<TextInput | null>(null);
  const passRef = React.useRef<TextInput | null>(null);

  console.log('======login==============================');
  console.log();
  console.log('====================================');
  const [state, setState] = useState({
    email: '', emailError: '',
    password: '', passError: '',
    loading: false, btnDisabled: true
  })


  const handleAddUserData = () => {
    let data = { name: state.email, pass: state.password }
    DispatchData(setUser(data)); resetStack(props, SCREEN2);
  }



  const onValidateLoginFields = () => {
    // Do something about login operation
    Keyboard.dismiss()

    let emailValid = validateEmail(state.email)

    let passValid = validatePass(state.password)

    if (!state.email && passValid) {
      setState({ ...state, emailError: t("emailRequired"), passError: '', btnDisabled: true })
      return
    }

    if (state.email && !emailValid) {
      setState({ ...state, emailError: t("emailValid"), passError: '', btnDisabled: true })
      return
    }

    if (!state.password && emailValid) {
      setState({ ...state, passError: t("passwordRequired"), emailError: '', btnDisabled: true })
      return
    }


    if (state.password && !passValid) {
      setState({ ...state, passError: t("passwordValid"), emailError: '', btnDisabled: true })
      return
    }

    if (state.email && state.password && emailValid && passValid) {

      setState({ ...state, passError: '', emailError: '', btnDisabled: false })

      setTimeout(() => { setState({ ...state, loading: true }) }, 2000);
      setTimeout(() => { setState({ ...state, loading: false }); handleAddUserData(); }, 3000);
    }
  };



  const onPressLogin = () => {
    onValidateLoginFields()
    // Do something about login operation
  };

  const LogoImage = useCallback(() => {
    return (
      <View style={styles.fl03AlignCenter}>
        <Text style={styles.screenTitle}>{t('Screen1')}</Text>
        <View style={styles.langLogoCont}>
          <CommonImage
            source={config.tmdbLogoImage}
            imgStyle={styles.LoginLogo} />
        </View>
      </View>
    )
  }, [])



  return (
    <ImageBackground source={config.backgroundImage} style={styles.fl1}>
      <SafeAreaView onStartShouldSetResponder={() => { onValidateLoginFields(); return true }} style={styles.fl1}>

        <ScrollView
          keyboardShouldPersistTaps='always'
          showsVerticalScrollIndicator={false}
          onResponderRelease={Keyboard.dismiss}
          automaticallyAdjustKeyboardInsets={true}>

          <LogoImage />

          <View style={[styles.fl07, styles.mh_15]}>
            <CommonInput
              placeholder={t("email")}
              inputRef={emailRef}
              value={state.email}
              label={t("email")}
              keyboardType="email-address"
              labelStyle={{ color: state.email ? colors.InputLabel : colors.trans }}
              leftIcon={lang === 'en' && { type: 'material-community', name: 'email-edit-outline' }}
              rightIcon={lang === 'ar' && { type: 'material-community', name: 'email-edit-outline' }}
              inputStyle={lang === 'ar' && styles.tlRight}
              errorMessage={state.emailError}
              returnKeyType='next'
              onSubmitEditing={() => { onValidateLoginFields(); passRef.current?.focus(); }}
              onChangeText={(text: any) => setState({ ...state, email: text, emailError: '' })}
            />

            <CommonInput
              placeholder={t("password")}
              inputRef={passRef}
              secureTextEntry
              value={state.password}
              maxLength={15}
              label={t("password")}
              labelStyle={{ color: state.password ? colors.InputLabel : colors.trans }}
              leftIcon={lang === 'en' && { type: 'material', name: 'lock-outline' }}
              rightIcon={lang === 'ar' && { type: 'material', name: 'lock-outline' }}
              inputStyle={lang === 'ar' && styles.tlRight}
              errorMessage={state.passError}
              returnKeyType='done'
              onSubmitEditing={() => { onValidateLoginFields(); return true }}
              onChangeText={(text: any) => setState({ ...state, password: text, passError: '' })}
            />

            <CommonButton
              title={t("login")}
              loading={state.loading}
              onPress={onPressLogin}
              disabled={state.btnDisabled}
            />
          </View>




          <View style={styles.h50} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}


export default Screen1;