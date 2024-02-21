package hoangson.testing.service.score;

import hoangson.testing.entity.Score;
import hoangson.testing.form.player.PlayForm;
import hoangson.testing.repository.IPlayerRepository;
import hoangson.testing.repository.IScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreService implements IScoreService {

    @Autowired
    IScoreRepository scoreRepository;
    @Autowired
    IPlayerRepository playerRepository;

    @Override
    public Score played(PlayForm form) {
        Score newPlayedTime = new Score();
        newPlayedTime.setScore(form.getScore());
        newPlayedTime.setPlayer(playerRepository.findById(form.getPlayerId()));
        scoreRepository.save(newPlayedTime);
        return newPlayedTime;
    }
}
