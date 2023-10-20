import { Snowflake, SnowflakeUtil } from "discord.js";

type Optional<T> = T | undefined | null;

/** Constant value that represents a nil Snowflake. */
export const NIL_SNOWFLAKE = "0000000000000000" as NIL_SNOWFLAKE;

/** A nil Snowflake has all (16) 0s. */
export type NIL_SNOWFLAKE = string & { nil_snowflake:never; };

/** Returns true if the value is a series of at least 16 numeric digits. */
export function isSnowflake(value: Optional<Snowflake>): value is Snowflake {
	const match = value?.match(/^\d{16,}$/) ?? null;
	return match !== null;
}

/**
 * Returns true if the value is a series of at least 16 0s.
 * This accounts for possibly old data that incorrectly assumed a static length of a Snowflake and had a different length for NIL_SNOWFLAKE.
 */
export function isNilSnowflake(value: Optional<Snowflake>): value is NIL_SNOWFLAKE {
	const match = value?.match(/^0{16,}$/) ?? null;
	return match !== null;
}

/** Returns true if the value is a valid non-nil Snowflake. */
export function isNonNilSnowflake(value: Optional<Snowflake>): value is Snowflake {
	return isSnowflake(value) && !isNilSnowflake(value);
}

/** Returns the value if it is a valid Snowflake, otherwise it returns NIL_SNOWFLAKE. */
export function orNilSnowflake(value: Optional<Snowflake>): Snowflake {
	return isSnowflake(value) && !isNilSnowflake(value) ? value : NIL_SNOWFLAKE;
}

export function randomSnowflake(): Snowflake {
	return SnowflakeUtil.generate().toString();
}