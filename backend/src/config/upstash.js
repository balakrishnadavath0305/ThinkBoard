import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();

//create a ratelimiter that allows 10 requests for 20sec
const ratelimit=new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(20,"60 s")
})

export default ratelimit