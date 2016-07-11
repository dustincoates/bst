/// <reference path="../typings/globals/node/index.d.ts" />

export class StringUtil {
    public static replaceAll(s: string, val: string, newVal: string): string {
        while (s.indexOf(val) != -1) {
            s = s.replace(val, newVal);
        }
        return s;
    }

    public static prettyPrint(bufferString: string): string {
        let s: string = StringUtil.replaceAll(bufferString, "\r\n", "\\n");
        s = StringUtil.replaceAll(s, "\n", "\\n");
        return s;
    }
}