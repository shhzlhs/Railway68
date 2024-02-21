package hoangson.testing.service.score;

import hoangson.testing.entity.Score;
import hoangson.testing.form.player.PlayForm;

public interface IScoreService {
    Score played(PlayForm form);
}
