require 'test_helper'

class ClickControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get codex" do
    get :codex
    assert_response :success
  end

end