var searchIndex = {};
searchIndex["tokio_core"] = {"doc":"`Future`-powered I/O at the core of Tokio","items":[[0,"io","tokio_core","I/O conveniences when working with primitives in `tokio-core`",null,null],[3,"Copy","tokio_core::io","A future which will copy all data from a reader into a writer.",null,null],[3,"EasyBuf","","A reference counted buffer of bytes.",null,null],[3,"EasyBufMut","","An RAII object returned from `get_mut` which provides mutable access to the underlying `Vec<u8>`.",null,null],[3,"Framed","","A unified `Stream` and `Sink` interface to an underlying `Io` object, using the `Codec` trait to encode and decode frames.",null,null],[3,"Flush","","A future used to fully flush an I/O object.",null,null],[3,"ReadExact","","A future which can be used to easily read exactly enough bytes to fill a buffer.",null,null],[3,"ReadToEnd","","A future which can be used to easily read the entire contents of a stream into a vector.",null,null],[3,"Read","","A future which can be used to easily read available number of bytes to fill a buffer.",null,null],[3,"ReadUntil","","A future which can be used to easily read the contents of a stream into a vector until the delimiter is reached.",null,null],[3,"ReadHalf","","The readable half of an object returned from `Io::split`.",null,null],[3,"WriteHalf","","The writable half of an object returned from `Io::split`.",null,null],[3,"Window","","A owned window around an underlying buffer.",null,null],[3,"WriteAll","","A future used to write the entire contents of some data to a stream.",null,null],[5,"copy","","Creates a future which represents copying all the bytes from one object to another.",null,{"inputs":[{"name":"r"},{"name":"w"}],"output":{"name":"copy"}}],[5,"flush","","Creates a future which will entirely flush an I/O object and then yield the object itself.",null,{"inputs":[{"name":"a"}],"output":{"name":"flush"}}],[5,"read_exact","","Creates a future which will read exactly enough bytes to fill `buf`, returning an error if EOF is hit sooner.",null,{"inputs":[{"name":"a"},{"name":"t"}],"output":{"name":"readexact"}}],[5,"read_to_end","","Creates a future which will read all the bytes associated with the I/O object `A` into the buffer provided.",null,{"inputs":[{"name":"a"},{"name":"vec"}],"output":{"name":"readtoend"}}],[5,"read","","Tries to read some bytes directly into the given `buf` in asynchronous manner, returning a future type.",null,{"inputs":[{"name":"r"},{"name":"t"}],"output":{"name":"read"}}],[5,"read_until","","Creates a future which will read all the bytes associated with the I/O object `A` into the buffer provided until the delimiter `byte` is reached. This method is the async equivalent to [`BufRead::read_until`].",null,{"inputs":[{"name":"a"},{"name":"u8"},{"name":"vec"}],"output":{"name":"readuntil"}}],[5,"write_all","","Creates a future that will write the entire contents of the buffer `buf` to the stream `a` provided.",null,{"inputs":[{"name":"a"},{"name":"t"}],"output":{"name":"writeall"}}],[11,"poll","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"easybuf"}}],[11,"new","","Creates a new EasyBuf with no data and the default capacity.",1,{"inputs":[],"output":{"name":"easybuf"}}],[11,"with_capacity","","Creates a new EasyBuf with `cap` capacity.",1,{"inputs":[{"name":"usize"}],"output":{"name":"easybuf"}}],[11,"len","","Returns the number of bytes contained in this `EasyBuf`.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"as_slice","","Returns the inner contents of this `EasyBuf` as a slice.",1,null],[11,"split_off","","Splits the buffer into two at the given index.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"easybuf"}}],[11,"drain_to","","Splits the buffer into two at the given index.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"easybuf"}}],[11,"get_mut","","Returns a mutable reference to the underlying growable buffer of bytes.",1,{"inputs":[{"name":"self"}],"output":{"name":"easybufmut"}}],[11,"as_ref","","",1,null],[11,"deref","","",2,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"deref_mut","","",2,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"from","","",1,{"inputs":[{"name":"vec"}],"output":{"name":"easybuf"}}],[11,"drop","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"start_send","","",3,null],[11,"poll_complete","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"get_ref","","Returns a reference to the underlying I/O stream wrapped by `Framed`.",3,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Returns a mutable reference to the underlying I/O stream wrapped by `Framed`.",3,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consumes the `Framed`, returning its underlying I/O stream.",3,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"poll","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",5,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",6,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",7,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",8,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll_read","","Calls the underlying `poll_read` function on this handling, testing to see if it's ready to be read from.",9,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Calls the underlying `poll_write` function on this handling, testing to see if it's ready to be written to.",10,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"read","","",9,null],[11,"write","","",10,null],[11,"flush","","",10,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"new","","Creates a new window around the buffer `t` defaulting to the entire slice.",11,{"inputs":[{"name":"t"}],"output":{"name":"window"}}],[11,"get_ref","","Gets a shared reference to the underlying buffer inside of this `Window`.",11,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Gets a mutable reference to the underlying buffer inside of this `Window`.",11,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consumes this `Window`, returning the underlying buffer.",11,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"start","","Returns the starting index of this window into the underlying buffer `T`.",11,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"end","","Returns the end index of this window into the underlying buffer `T`.",11,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"set_start","","Changes the starting index of this window to the index specified.",11,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"window"}}],[11,"set_end","","Changes the end index of this window to the index specified.",11,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"window"}}],[11,"as_ref","","",11,null],[11,"as_mut","","",11,null],[11,"poll","","",12,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[6,"IoFuture","","A convenience typedef around a `Future` whose error component is `io::Error`",null,null],[6,"IoStream","","A convenience typedef around a `Stream` whose error component is `io::Error`",null,null],[8,"Codec","","Encoding and decoding of frames via buffers.",null,null],[16,"In","","The type of decoded frames.",13,null],[16,"Out","","The type of frames to be encoded.",13,null],[10,"decode","","Attempts to decode a frame from the provided buffer of bytes.",13,{"inputs":[{"name":"self"},{"name":"easybuf"}],"output":{"name":"result"}}],[11,"decode_eof","","A default method available to be called when there are no more bytes available to be read from the underlying I/O.",13,{"inputs":[{"name":"self"},{"name":"easybuf"}],"output":{"name":"result"}}],[10,"encode","","Encodes a frame into the buffer provided.",13,null],[8,"Io","","A trait for read/write I/O objects",null,null],[11,"poll_read","","Tests to see if this I/O object may be readable.",14,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Tests to see if this I/O object may be writable.",14,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"framed","","Provides a `Stream` and `Sink` interface for reading and writing to this `Io` object, using `Decode` and `Encode` to read and write the raw data.",14,{"inputs":[{"name":"self"},{"name":"c"}],"output":{"name":"framed"}}],[11,"split","","Helper method for splitting this read/write object into two halves.",14,null],[0,"net","tokio_core","TCP/UDP bindings for `tokio-core`",null,null],[3,"TcpStream","tokio_core::net","An I/O object representing a TCP stream connected to a remote endpoint.",null,null],[3,"TcpStreamNew","","Future returned by `TcpStream::connect` which will resolve to a `TcpStream` when the stream is connected.",null,null],[3,"TcpListener","","An I/O object representing a TCP socket listening for incoming connections.",null,null],[3,"Incoming","","Stream returned by the `TcpListener::incoming` function representing the stream of sockets received from a listener.",null,null],[3,"UdpSocket","","An I/O object representing a UDP socket.",null,null],[3,"UdpFramed","","A unified `Stream` and `Sink` interface to an underlying `UdpSocket`, using the `UdpCodec` trait to encode and decode frames.",null,null],[3,"SendDgram","","A future used to write the entire contents of some data to a UDP socket.",null,null],[3,"RecvDgram","","A future used to receive a datagram from a UDP socket.",null,null],[11,"as_raw_fd","","",15,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"as_raw_fd","","",16,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"bind","","Create a new TCP listener associated with this event loop.",16,{"inputs":[{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"result"}}],[11,"accept","","Attempt to accept a connection and create a new connected `TcpStream` if successful.",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"from_listener","","Create a new TCP listener from the standard library's TCP listener.",16,{"inputs":[{"name":"tcplistener"},{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"result"}}],[11,"poll_read","","Test whether this socket is ready to be read or not.",16,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"local_addr","","Returns the local address that this listener is bound to.",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"incoming","","Consumes this listener, returning a stream of the sockets this listener accepts.",16,{"inputs":[{"name":"self"}],"output":{"name":"incoming"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",16,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",16,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",17,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"connect","","Create a new TCP stream connected to the specified address.",15,{"inputs":[{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"tcpstreamnew"}}],[11,"from_stream","","Create a new `TcpStream` from a `net::TcpStream`.",15,{"inputs":[{"name":"tcpstream"},{"name":"handle"}],"output":{"name":"result"}}],[11,"connect_stream","","Creates a new `TcpStream` from the pending socket inside the given `std::net::TcpStream`, connecting it to the address specified.",15,{"inputs":[{"name":"tcpstream"},{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"iofuture"}}],[11,"poll_read","","Test whether this socket is ready to be read or not.",15,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Test whether this socket is ready to be written to or not.",15,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"local_addr","","Returns the local address that this stream is bound to.",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"peer_addr","","Returns the remote address that this stream is connected to.",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the read, write, or both halves of this connection.",15,{"inputs":[{"name":"self"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",15,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_keepalive_ms","","Sets whether keepalive messages are enabled to be sent on this socket.",15,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"keepalive_ms","","Returns whether keepalive messages are enabled on this socket, and if so the amount of milliseconds between them.",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",15,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"read","","",15,null],[11,"write","","",15,null],[11,"flush","","",15,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"poll_read","","",15,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","",15,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",18,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",19,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"start_send","","",19,null],[11,"poll_complete","","",19,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"get_ref","","Returns a reference to the underlying I/O stream wrapped by `Framed`.",19,{"inputs":[{"name":"self"}],"output":{"name":"udpsocket"}}],[11,"get_mut","","Returns a mutable reference to the underlying I/O stream wrapped by `Framed`.",19,{"inputs":[{"name":"self"}],"output":{"name":"udpsocket"}}],[11,"into_inner","","Consumes the `Framed`, returning its underlying I/O stream.",19,{"inputs":[{"name":"self"}],"output":{"name":"udpsocket"}}],[11,"as_raw_fd","","",20,{"inputs":[{"name":"self"}],"output":{"name":"rawfd"}}],[11,"bind","","Create a new UDP socket bound to the specified address.",20,{"inputs":[{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"result"}}],[11,"from_socket","","Creates a new `UdpSocket` from the previously bound socket provided.",20,{"inputs":[{"name":"udpsocket"},{"name":"handle"}],"output":{"name":"result"}}],[11,"framed","","Provides a `Stream` and `Sink` interface for reading and writing to this `UdpSocket` object, using the provided `UdpCodec` to read and write the raw data.",20,{"inputs":[{"name":"self"},{"name":"c"}],"output":{"name":"udpframed"}}],[11,"local_addr","","Returns the local address that this stream is bound to.",20,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"poll_read","","Test whether this socket is ready to be read or not.",20,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Test whether this socket is ready to be written to or not.",20,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"send_to","","Sends data on the socket to the given address. On success, returns the number of bytes written.",20,null],[11,"send_dgram","","Creates a future that will write the entire contents of the buffer `buf` provided as a datagram to this socket.",20,{"inputs":[{"name":"self"},{"name":"t"},{"name":"socketaddr"}],"output":{"name":"senddgram"}}],[11,"recv_from","","Receives data from the socket. On success, returns the number of bytes read and the address from whence the data came.",20,null],[11,"recv_dgram","","Creates a future that receive a datagram to be written to the buffer provided.",20,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"recvdgram"}}],[11,"broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",20,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",20,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",20,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",20,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",20,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",20,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",20,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",20,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",20,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",20,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",20,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",20,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",20,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",20,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"fmt","","",20,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",21,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",22,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[8,"UdpCodec","","Encoding of frames via buffers.",null,null],[16,"In","","The type of decoded frames.",23,null],[16,"Out","","The type of frames to be encoded.",23,null],[10,"decode","","Attempts to decode a frame from the provided buffer of bytes.",23,null],[10,"encode","","Encodes a frame into the buffer provided.",23,null],[0,"reactor","tokio_core","The core reactor driving all I/O",null,null],[3,"PollEvented","tokio_core::reactor","A concrete implementation of a stream of readiness notifications for I/O objects that originates from an event loop.",null,null],[3,"Timeout","","A future representing the notification that a timeout has occurred.",null,null],[3,"Interval","","A stream representing notifications at fixed interval",null,null],[3,"Core","","An event loop.",null,null],[3,"CoreId","","An unique ID for a Core",null,null],[3,"Remote","","Handle to an event loop, used to construct I/O objects, send messages, and otherwise interact indirectly with the event loop itself.",null,null],[3,"Handle","","A non-sendable handle to an event loop, useful for manufacturing instances of `LoopData`.",null,null],[11,"new","","Creates a new readiness stream associated with the provided `loop_handle` and for the given `source`.",24,{"inputs":[{"name":"e"},{"name":"handle"}],"output":{"name":"result"}}],[11,"deregister","","Deregisters this source of events from the reactor core specified.",24,{"inputs":[{"name":"self"},{"name":"handle"}],"output":{"name":"result"}}],[11,"poll_read","","Tests to see if this source is ready to be read from or not.",24,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","Tests to see if this source is ready to be written to or not.",24,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"need_read","","Indicates to this source of events that the corresponding I/O object is no longer readable, but it needs to be.",24,{"inputs":[{"name":"self"}],"output":null}],[11,"need_write","","Indicates to this source of events that the corresponding I/O object is no longer writable, but it needs to be.",24,{"inputs":[{"name":"self"}],"output":null}],[11,"remote","","Returns a reference to the event loop handle that this readiness stream is associated with.",24,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"get_ref","","Returns a shared reference to the underlying I/O object this readiness stream is wrapping.",24,{"inputs":[{"name":"self"}],"output":{"name":"e"}}],[11,"get_mut","","Returns a mutable reference to the underlying I/O object this readiness stream is wrapping.",24,{"inputs":[{"name":"self"}],"output":{"name":"e"}}],[11,"read","","",24,null],[11,"write","","",24,null],[11,"flush","","",24,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"poll_read","","",24,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"poll_write","","",24,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[11,"drop","","",24,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Creates a new timeout which will fire at `dur` time into the future.",25,{"inputs":[{"name":"duration"},{"name":"handle"}],"output":{"name":"result"}}],[11,"new_at","","Creates a new timeout which will fire at the time specified by `at`.",25,{"inputs":[{"name":"instant"},{"name":"handle"}],"output":{"name":"result"}}],[11,"poll","","",25,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"drop","","",25,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Creates a new interval which will fire at `dur` time into the future, and will repeat every `dur` interval after",26,{"inputs":[{"name":"duration"},{"name":"handle"}],"output":{"name":"result"}}],[11,"new_at","","Creates a new interval which will fire at the time specified by `at`, and then will repeat every `dur` interval after",26,{"inputs":[{"name":"instant"},{"name":"duration"},{"name":"handle"}],"output":{"name":"result"}}],[11,"poll","","",26,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"drop","","",26,{"inputs":[{"name":"self"}],"output":null}],[11,"clone","","",27,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"eq","","",27,{"inputs":[{"name":"self"},{"name":"coreid"}],"output":{"name":"bool"}}],[11,"ne","","",27,{"inputs":[{"name":"self"},{"name":"coreid"}],"output":{"name":"bool"}}],[11,"hash","","",27,null],[11,"fmt","","",27,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",28,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"clone","","",29,{"inputs":[{"name":"self"}],"output":{"name":"handle"}}],[11,"new","","Creates a new event loop, returning any error that happened during the creation.",30,{"inputs":[],"output":{"name":"result"}}],[11,"handle","","Returns a handle to this event loop which cannot be sent across threads but can be used as a proxy to the event loop itself.",30,{"inputs":[{"name":"self"}],"output":{"name":"handle"}}],[11,"remote","","Generates a remote handle to this event loop which can be used to spawn tasks from other threads into this event loop.",30,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"run","","Runs a future until completion, driving the event loop while we're otherwise waiting for the future to complete.",30,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"turn","","Performs one iteration of the event loop, blocking on waiting for events for at most `max_wait` (forever if `None`).",30,{"inputs":[{"name":"self"},{"name":"option"}],"output":null}],[11,"id","","Get the ID of this loop",30,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"spawn","","Spawns a new future into the event loop this remote is associated with.",28,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"id","","Return the ID of the represented Core",28,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[11,"handle","","Attempts to \"promote\" this remote to a handle, if possible.",28,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"remote","","Returns a reference to the underlying remote handle to the event loop.",29,{"inputs":[{"name":"self"}],"output":{"name":"remote"}}],[11,"spawn","","Spawns a new future on the event loop this handle is associated with.",29,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"spawn_fn","","Spawns a closure on this event loop.",29,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"id","","Return the ID of the represented Core",29,{"inputs":[{"name":"self"}],"output":{"name":"coreid"}}],[14,"try_nb","tokio_core","A convenience macro for working with `io::Result<T>` from the `Read` and `Write` traits.",null,null],[11,"decode_eof","tokio_core::io","A default method available to be called when there are no more bytes available to be read from the underlying I/O.",13,{"inputs":[{"name":"self"},{"name":"easybuf"}],"output":{"name":"result"}}]],"paths":[[3,"Copy"],[3,"EasyBuf"],[3,"EasyBufMut"],[3,"Framed"],[3,"Flush"],[3,"ReadExact"],[3,"ReadToEnd"],[3,"Read"],[3,"ReadUntil"],[3,"ReadHalf"],[3,"WriteHalf"],[3,"Window"],[3,"WriteAll"],[8,"Codec"],[8,"Io"],[3,"TcpStream"],[3,"TcpListener"],[3,"Incoming"],[3,"TcpStreamNew"],[3,"UdpFramed"],[3,"UdpSocket"],[3,"SendDgram"],[3,"RecvDgram"],[8,"UdpCodec"],[3,"PollEvented"],[3,"Timeout"],[3,"Interval"],[3,"CoreId"],[3,"Remote"],[3,"Handle"],[3,"Core"]]};
initSearch(searchIndex);
