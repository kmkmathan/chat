<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Redis;

class ChatController extends Controller
{
	public function __construct() {

		$this->middleware('auth');

	}

	public function sendMessage(Request $request){

		$redis = Redis::connection();

		$data = ['message' => $request->input('message'), 'user' => $request->input('user')];

		$redis->publish('message', json_encode($data));

		//return response()->json([]);
		//return response()->json($response, 200);
		return response()->json($data);

	}
}