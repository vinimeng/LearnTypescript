export default class Utils {
    static RGBAToHexA(r, g, b, a) {
        let strR = r.toString(16);
        let strG = g.toString(16);
        let strB = b.toString(16);
        let strA = a.toString(16);
        if (strR.length == 1)
            strR = "0" + strR;
        if (strG.length == 1)
            strG = "0" + strG;
        if (strB.length == 1)
            strB = "0" + strB;
        if (strA.length == 1)
            strA = "0" + strA;
        return "#" + strR + strG + strB + strA;
    }
}
