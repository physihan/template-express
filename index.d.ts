import Express from "express";
// import * as core from "express-serve-static-core";

// interface IRequestHandler<P extends core.Params = core.ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = core.Query> extends core.RequestHandler<P, ResBody, ReqBody, ReqQuery> { }

declare global {
    type RequestHandler = Express.RequestHandler;
}


