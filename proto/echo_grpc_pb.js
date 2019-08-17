/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./payserver_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.PaySvrClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.PaySvrPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TestReq,
 *   !proto.TestRes>}
 */
const methodDescriptor_PaySvr_Test = new grpc.web.MethodDescriptor(
  '/PaySvr/Test',
  grpc.web.MethodType.UNARY,
  proto.TestReq,
  proto.TestRes,
  /** @param {!proto.TestReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TestRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TestReq,
 *   !proto.TestRes>}
 */
const methodInfo_PaySvr_Test = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TestRes,
  /** @param {!proto.TestReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TestRes.deserializeBinary
);


/**
 * @param {!proto.TestReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TestRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TestRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PaySvrClient.prototype.test =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PaySvr/Test',
      request,
      metadata || {},
      methodDescriptor_PaySvr_Test,
      callback);
};


/**
 * @param {!proto.TestReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TestRes>}
 *     A native promise that resolves to the response
 */
proto.PaySvrPromiseClient.prototype.test =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PaySvr/Test',
      request,
      metadata || {},
      methodDescriptor_PaySvr_Test);
};


module.exports = proto;

