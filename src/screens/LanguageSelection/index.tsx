import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { DispatchData, GetLangData, GetStoreData, navigateTo, resetStack, } from '../../utils/commonFun';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setLanguage } from '../../redux/actions';
import CommonButton from '../../components/commonButton';
import CommonCheckBox from '../../components/commonCheckBox';
import CommonImage from '../../components/commonImage';
import Loader from '../../components/Loader';
import colors from '../../utils/colors/index';
import config from '../../utils/config/index';
import styles from '../../utils/styles/index';
import '../../utils/translation/i18n';
import { useTranslation } from 'react-i18next';
import { SCREEN1, SCREEN2 } from '../../route/index';

const LanguageSelection = (props: any) => {

  const { t, i18n } = useTranslation();
  const [state, setState] = useState({ loading: true, checked: true })

  useEffect(() => { checkLangData(); }, []);

  const checkLangData = async () => {
    const lang = GetLangData();
    i18n.changeLanguage(lang.data)
    if (lang && lang.data && lang.data === 'ar') { setState({ loading: false, checked: false }) }
    else setState({ ...state, loading: false })
  }


  const onPressSubmit = () => {
    const userloggedin = GetStoreData();
    let data = { data: state.checked ? 'en' : 'ar' }
    DispatchData(setLanguage(data))
    i18n.changeLanguage(state.checked ? 'en' : 'ar')
    if (userloggedin) { resetStack(props, SCREEN2) } else { navigateTo(props, SCREEN1) }
  }



  const LogoImage = useCallback(() => {
    return (
      <View style={styles.langLogoCont}>
        <CommonImage
          source={config.tmdbLogoImage}
          imgStyle={styles.LoginLogo} />
      </View>
    )
  }, [])


  const SelectLang = useCallback(() => {
    return (
      <View style={styles.mv20}>
        <Text style={styles.splashTitle}>{t('selectLanguage')}</Text>
      </View>
    )
  }, [])

  const uncheckBox = () => setState({ ...state, checked: !state.checked })


  return (
    <ImageBackground source={config.backgroundImage} style={styles.fl1}>
      <SafeAreaView style={styles.fl1AlignCenter}>

        {state.loading && <Loader />}

        <LogoImage />

        <View style={styles.fl1}>

          <SelectLang />

          <CommonCheckBox
            title={`English`}
            checked={state.checked}
            textStyle={{ color: state.checked ? colors.theme2 : colors.Silver }}
            onPress={() => uncheckBox()}
          />

          <View style={styles.h50} />

          <CommonCheckBox
            title={`Arbic`}
            textStyle={{ color: !state.checked ? colors.theme2 : colors.Silver }}
            checked={!state.checked}
            onPress={() => uncheckBox()}
          />

          <CommonButton
            title={t("submit")}
            onPress={() => onPressSubmit()}
          />

        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}


export default LanguageSelection;