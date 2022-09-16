import dayjs from "dayjs";

export const formatDatetoWeekDay = date => dayjs(date).format("dddd, hh:mmA");

export const calculateCreatedAgo = date => dayjs(date).fromNow();
