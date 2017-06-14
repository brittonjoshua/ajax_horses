get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new
  erb :"/horses/new"
end

post '/horses' do
  p params
  @horse = Horse.new(params[:horse])
  if @horse.save
    if request.xhr?
      "Horse was created!!!"
    else
      redirect "/horses/#{@horse.id}"
    end
  else
    if request.xhr?
      status 422
      erb :'horses/_errors', layout: false, locals: { horse: @horse }
    else
      erb :"/horses/new"
    end
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  erb :"/horses/show"
end
