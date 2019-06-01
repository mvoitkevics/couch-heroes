// Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.

#include "CouchHeroesGameMode.h"
#include "CouchHeroesPlayerController.h"
#include "CouchHeroesCharacter.h"
#include "UObject/ConstructorHelpers.h"

ACouchHeroesGameMode::ACouchHeroesGameMode()
{
	// use our custom PlayerController class
	PlayerControllerClass = ACouchHeroesPlayerController::StaticClass();

	// set default pawn class to our Blueprinted character
	static ConstructorHelpers::FClassFinder<APawn> PlayerPawnBPClass(TEXT("/Game/TopDownCPP/Blueprints/TopDownCharacter"));
	if (PlayerPawnBPClass.Class != NULL)
	{
		DefaultPawnClass = PlayerPawnBPClass.Class;
	}
}