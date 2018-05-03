<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/welcome', function () {
    return view('welcome');
});


Route::group(['middleware' => 'web'], function () {

   // Route::auth();
    
    //Route::get('/', 'HomeController@index');

    //Route::get('/home', 'HomeController@index');

});

//Route::get('/', 'ChatController@index');
//Route::post('sendmessage', 'chatController@sendMessage');


// Route::get('user/verify/{verification_code}', 'AuthController@verifyUser');

// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');

// Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');