/** Convenience for creating/sharing quoted value regex in case we change it later. */
export function createQuotedRegex(allowEmpty: boolean): RegExp {
	return new RegExp(getQuotedRegexSource(allowEmpty ? "*" : "+"));
}

/** Removes first and last character if they are both quotes. */
export function dequote(value: string): string {
	return isQuoted(value) ? value.slice(1, -1) : value;
}

/** Returns the string source of our quoted value regex. */
export function getQuotedRegexSource(s: "*" | "+"): string {
	return `(?:“[^”]${s}”|„[^“]${s}“|„[^”]${s}”|"[^"]${s}")`;
}

/** Returns true if the value begins and ends in quotes, false otherwise. */
export function isQuoted(value: string): boolean {
	const regex = new RegExp(`^${getQuotedRegexSource("*")}$`);
	return value.match(regex) !== null;
}

/** Puts quotes around a value; if the value has quotes in it, it will try various fancy quotes until it won't break. */
export function quote(value: string): string {
	if (value.includes(`"`)) {
		//“[^”]${s}”|„[^“]${s}“|„[^”]${s}”|"[^"]${s}"
		if (!value.match(/[“”]/)) {
			return `“${value}”`;
		}
		if (!value.match(/[„“]/)) {
			return `„${value}“`;
		}
		if (!value.match(/[„”]/)) {
			return `„${value}”`;
		}
	}
	return `"${value}"`;
}
