import { StyleSheet, Dimensions, Platform } from 'react-native';
import Config from '../../utils/config/index';
import Colors from '../../utils/colors/index';
const { height, width } = Dimensions.get('window');
let little = height / 7
export const l_margin = height / 7;
export const Margin = width / 20;
export const MinMargin = width / 40;
export const BigTitleFontSize = height / 35;
export const TitleFontSize = height / 45;
export const BorderRadius = height / 200;
export const ButtonFontSize = height / 60;
const THUMB_RADIUS = 12;


// ---------------------All Components style page -------------------------
export default StyleSheet.create((props: any) => (
    {
        z1: { zIndex: 1 },
        flexGrow: { flexGrow: 1 },
        AlignC: { alignItems: 'center' },
        h100: { height: '100%' },
        w100: { width: '100%' },
        jus: { justifyContent: "center" },
        AlcJcc: { alignItems: 'center', justifyContent: 'center' },
        flexjustify: { flex: 1, justifyContent: 'center' },
        HeaderSearch: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end' },
        flex1: { flex: 1, flexDirection: 'row', },

        // ---------------------- Global button -------------------------
        GlobalButt: { fontSize: height / 50, color: props && props.LabelColor, marginHorizontal: height / 100 },
        loginBtnTextStyle: { fontWeight: "bold", fontSize: 18, color: "rgba(4,4,4,0.7)" },
        disabledTitleStyle: { fontSize: 18, color: "rgba(84,116,180,0.5)" },
        loginBtnStyle: { width: "100%", backgroundColor: "rgb(158,198,116)", borderRadius: 25, height: 50 },
        disabledBtnStyle: { width: "100%", backgroundColor: 'transparent', borderWidth: 0.5, borderRadius: 25, height: 50, marginTop: 40 },


        // ---------------------- Global Input -------------------------
        InputLabel: { color: props && props.value ? Colors.Red : Colors.trans },
        InputError: { fontSize: height / 65 },
        InputLIcon: { paddingLeft: height / little, paddingRight: height / little, },
        InputCont: { width: "100%", height: 50, backgroundColor: Colors.InputBG, borderRadius: 25, justifyContent: "center", marginTop: 10, padding: 20, borderBottomWidth: 0 },
        InputStyle: { fontSize: height / 45, color: Colors.IText },


        // ----------------------  Loader  -------------------------
        LoaderCont: { zIndex: 1, width: width, height: height / 1.2, alignItems: 'center', position: 'absolute', justifyContent: "center", backgroundColor: Colors.LoaderBG, },
        LoaderCircle: { elevation: 2, width: height / 12, height: height / 12, borderRadius: height / 24, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.White },

        // ----------------------  checkboxCont -------------------------

        checkboxCont: { borderRadius: 25, borderColor: Colors.InputLabel, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' },


        // ----------------------  Movie Item and Card-------------------------

        cardCont: { borderRadius: 10, backgroundColor: Colors.White, marginBottom: 20, overflow: 'hidden', shadowColor: Colors.Black, shadowOffset: { width: 0,height: 1,}, shadowOpacity: 0.2, shadowRadius: 1.41, elevation: 2 },
        cardItemcont: { flex: 1,marginBottom: 12,marginHorizontal: 6, ackgroundColor: Colors.theme2,alignItems: 'center',borderColor: Colors.LightTheme, borderWidth: 0.8 },
        cardImage: { width: '100%', height: 170 },
        cardTitle: { fontSize: 14, color: Colors.White, textAlign: 'center', marginVertical: 10, marginHorizontal: 12,},


        fl1: { flex: 1 },
        fl2: { flex: 2 },
        fl3: { flex: 3 },
        fl4: { flex: 4 },
        fl5: { flex: 5 },
        fl6: { flex: 6 },
        fl7: { flex: 7 },
        fl9: { flex: 9 },
        fl10: { flex: 10 },

    }));


















const margin = height / 80;
const borderradius = height / 150
const UpArror = 'chevron-up'
const DownArror = 'chevron-down'
const TypeArrow = 'entypo'
const SideArror = 'chevron-right'
let pickerHeight = 0;
const MaxPickerHeight = height / 1.5
const HeaderFontSize = height / 32
const TitleBigFontSize = height / 43
const HeaderMediumFontSize = height / 35
const TitleSemiBigFontSize = height / 48
const TitleMediumFontSize = height / 55
const TitleSmallFontSize = height / 60
const TitleSemiSmallFontSize = height / 73

const PriceFontSize = height / 52
const PickerFontSize = height / 50
